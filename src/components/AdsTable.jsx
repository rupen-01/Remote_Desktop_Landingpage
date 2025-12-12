import { useEffect, useState } from "react";
import { getBanners, createBanner, deleteBanner } from "../services/api";

const AdsTable = () => {
  const [banners, setBanners] = useState([]);

  const [title, setTitle] = useState("banner1");
  const [redirectLink, setRedirectLink] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchBanners = async () => {
    try {
      const res = await getBanners();
      setBanners(res.data || []); // IMPORTANT FIX
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!redirectLink) return alert("Redirect link is required");

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("redirectLink", redirectLink);

      // VERY IMPORTANT: Correct field name to match multer
      if (image) formData.append("file", image);

      await createBanner(formData);

      setRedirectLink("");
      setImage(null);

      fetchBanners();
    } catch (error) {
      console.error("Create banner failed", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBanner(id);
      fetchBanners();
    } catch (error) {
      console.error("Delete failed", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Admin Panel – Advertisement Banners
        </h1>

        {/* FORM */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Add / Update Banner
          </h2>

          <form
            onSubmit={submitHandler}
            className="grid gap-4 md:grid-cols-2"
          >
            {/* Title */}
            <select
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="banner1">Banner 1</option>
              <option value="banner2">Banner 2</option>
            </select>

            {/* Redirect Link */}
            <input
              type="text"
              placeholder="Redirect Link"
              value={redirectLink}
              onChange={(e) => setRedirectLink(e.target.value)}
              className="border p-2 rounded"
              required
            />

            {/* File Upload */}
            <input
              type="file"
              accept="image/*,video/*"
              onChange={(e) => setImage(e.target.files[0])}
              className="md:col-span-2"
            />

            <button
              className="md:col-span-2 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              {loading ? "Saving..." : "Save Banner"}
            </button>
          </form>
        </div>

        {/* TABLE */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            All Banners
          </h2>

          <table className="w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-2">Preview</th>
                <th className="p-2">Title</th>
                <th className="p-2">Redirect</th>
                <th className="p-2">Video</th>
                <th className="p-2">Status</th>
                <th className="p-2">Action</th>
              </tr>
            </thead>

            <tbody>
              {banners.map((b) => (
                <tr key={b._id} className="border-t">

                  <td className="p-2">
                    {b.image && (
                      <img
                        src={b.image}
                        className="w-28 rounded"
                        alt="banner"
                      />
                    )}

                    {b.videoUrl && (
                      <video
                        src={b.videoUrl}
                        className="w-28 rounded"
                        autoPlay
                        muted
                        loop
                      />
                    )}
                  </td>

                  <td className="p-2">{b.title}</td>

                  <td className="p-2">
                    <a
                      href={b.redirectLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-600 underline"
                    >
                      Visit
                    </a>
                  </td>

                  <td className="p-2">{b.videoUrl ? "Yes" : "No"}</td>

                  <td className="p-2">
                    <span
                      className={`px-2 py-1 rounded text-white ${
                        b.isActive ? "bg-green-500" : "bg-gray-500"
                      }`}
                    >
                      {b.isActive ? "Active" : "Inactive"}
                    </span>
                  </td>

                  <td className="p-2">
                    <button
                      onClick={() => handleDelete(b._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                      Delete
                    </button>
                  </td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default AdsTable;
