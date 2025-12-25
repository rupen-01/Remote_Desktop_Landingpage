// import { useEffect, useState } from "react";
// import { getBanners, createBanner, deleteBanner } from "../services/api";
// import logo from "../../public/Only ProtoMart (editable) RGB.png"; // 👈 LOGO PATH

// const AdsTable = () => {
//   const [banners, setBanners] = useState([]);

//   const [title, setTitle] = useState("banner1");
//   const [redirectLink, setRedirectLink] = useState("");
//   const [image, setImage] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const fetchBanners = async () => {
//     try {
//       const res = await getBanners();
//       setBanners(res.data || []);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchBanners();
//   }, []);

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     if (!redirectLink) return alert("Redirect link is required");

//     try {
//       setLoading(true);

//       const formData = new FormData();
//       formData.append("title", title);
//       formData.append("redirectLink", redirectLink);
//       if (image) formData.append("file", image);

//       await createBanner(formData);

//       setRedirectLink("");
//       setImage(null);
//       fetchBanners();
//     } catch (error) {
//       console.error("Create banner failed", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await deleteBanner(id);
//       fetchBanners();
//     } catch (error) {
//       console.error("Delete failed", error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-3 sm:p-6">
//       <div className="max-w-6xl mx-auto">

//        {/* ===== HEADER WITH LOGO (FIXED) ===== */}
// <div className="bg-white rounded-xl shadow mb-6">
//   <div className="flex items-center px-6 py-4 gap-4">
    
//     {/* LOGO */}
//     <img
//       src={logo}
//       alt="Admin Logo"
//       className="w-40 h-20 object-contain"
//     />

//     {/* TITLE */}
//     <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
//       Admin Panel – Advertisement Banners
//     </h1>

//   </div>
// </div>


//         {/* ===== FORM ===== */}
//         <div className="bg-white p-4 sm:p-6 rounded-xl shadow mb-8">
//           <h2 className="text-xl font-semibold mb-4">
//             Add / Update Banner
//           </h2>

//           <form
//             onSubmit={submitHandler}
//             className="grid gap-4 grid-cols-1 md:grid-cols-2"
//           >
//             <select
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="border p-2 rounded"
//             >
//               <option value="banner1">Banner 1</option>
//               <option value="banner2">Banner 2</option>
//             </select>

//             <input
//               type="text"
//               placeholder="Redirect Link"
//               value={redirectLink}
//               onChange={(e) => setRedirectLink(e.target.value)}
//               className="border p-2 rounded"
//               required
//             />

//             {/* FILE UPLOAD */}
//             <label className="md:col-span-2 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition">
//               <input
//                 type="file"
//                 accept="image/*,video/*"
//                 onChange={(e) => setImage(e.target.files[0])}
//                 className="hidden"
//               />
//               <span className="text-gray-600 font-medium">
//                 Click to upload Image / Video
//               </span>
//               {image && (
//                 <span className="mt-2 text-sm text-green-600">
//                   Selected: {image.name}
//                 </span>
//               )}
//             </label>

//             <button
//               type="submit"
//               disabled={loading}
//               className="md:col-span-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//             >
//               {loading ? "Saving..." : "Save Banner"}
//             </button>
//           </form>
//         </div>

//         {/* ===== TABLE ===== */}
//         <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
//           <h2 className="text-xl font-semibold mb-4">
//             All Banners
//           </h2>

//           <div className="overflow-x-auto">
//             <table className="w-full min-w-[800px]">
//               <thead className="bg-gray-200">
//                 <tr>
//                   <th className="p-2 text-left">Preview</th>
//                   <th className="p-2 text-left">Title</th>
//                   <th className="p-2 text-left">Redirect</th>
//                   <th className="p-2 text-left">Video</th>
//                   <th className="p-2 text-left">Status</th>
//                   <th className="p-2 text-left">Action</th>
//                 </tr>
//               </thead>

//               <tbody>
//                 {banners.map((b) => (
//                   <tr key={b._id} className="border-t">
//                     <td className="p-2">
//                       {b.image && (
//                         <img
//                           src={b.image}
//                           className="w-20 sm:w-28 rounded"
//                           alt="banner"
//                         />
//                       )}
//                       {b.videoUrl && (
//                         <video
//                           src={b.videoUrl}
//                           className="w-20 sm:w-28 rounded"
//                           autoPlay
//                           muted
//                           loop
//                         />
//                       )}
//                     </td>

//                     <td className="p-2">{b.title}</td>

//                     <td className="p-2">
//                       <a
//                         href={b.redirectLink}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="text-blue-600 underline"
//                       >
//                         Visit
//                       </a>
//                     </td>

//                     <td className="p-2">
//                       {b.videoUrl ? "Yes" : "No"}
//                     </td>

//                     <td className="p-2">
//                       <span
//                         className={`px-2 py-1 rounded text-white text-sm ${
//                           b.isActive ? "bg-green-500" : "bg-gray-500"
//                         }`}
//                       >
//                         {b.isActive ? "Active" : "Inactive"}
//                       </span>
//                     </td>

//                     <td className="p-2">
//                       <button
//                         onClick={() => handleDelete(b._id)}
//                         className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}

//                 {banners.length === 0 && (
//                   <tr>
//                     <td colSpan="6" className="p-4 text-center text-gray-500">
//                       No banners found
//                     </td>
//                   </tr>
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AdsTable;


import { useEffect, useState } from "react";
import { getBanners, createBanner, deleteBanner } from "../services/api";
import logo from "../../public/Only ProtoMart (editable) RGB.png";

const AdsTable = () => {
  const [banners, setBanners] = useState([]);

  const [title, setTitle] = useState("banner1");
  const [redirectLink, setRedirectLink] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // ✅ 1.5MB LIMIT
  const MAX_FILE_SIZE = 1.5 * 1024 * 1024; // 1.5 MB

  const fetchBanners = async () => {
    try {
      const res = await getBanners();
      setBanners(res.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  // ✅ FILE VALIDATION HANDLER
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.size > MAX_FILE_SIZE) {
      alert("File size must be less than or equal to 1.5 MB");
      e.target.value = null; // reset input
      setImage(null);
      return;
    }

    setImage(file);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!redirectLink) {
      alert("Redirect link is required");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("title", title);
      formData.append("redirectLink", redirectLink);
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
    <div className="min-h-screen bg-gray-100 p-3 sm:p-6">
      <div className="max-w-6xl mx-auto">

        {/* ===== HEADER ===== */}
        <div className="bg-white rounded-xl shadow mb-6">
          <div className="flex items-center px-6 py-4 gap-4">
            <img
              src={logo}
              alt="Admin Logo"
              className="w-40 h-20 object-contain"
            />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              Admin Panel – Advertisement Banners
            </h1>
          </div>
        </div>

        {/* ===== FORM ===== */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Add / Update Banner
          </h2>

          <form
            onSubmit={submitHandler}
            className="grid gap-4 grid-cols-1 md:grid-cols-2"
          >
            <select
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 rounded"
            >
              <option value="banner1">Banner 1</option>
              <option value="banner2">Banner 2</option>
            </select>

            <input
              type="text"
              placeholder="Redirect Link"
              value={redirectLink}
              onChange={(e) => setRedirectLink(e.target.value)}
              className="border p-2 rounded"
              required
            />

            {/* FILE UPLOAD */}
            <label className="md:col-span-2 border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 transition">
              <input
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <span className="text-gray-600 font-medium">
                Click to upload Image / Video (Max 1.5MB)
              </span>

              {image && (
                <span className="mt-2 text-sm text-green-600">
                  Selected: {image.name}
                </span>
              )}
            </label>

            <button
              type="submit"
              disabled={loading}
              className="md:col-span-2 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              {loading ? "Saving..." : "Save Banner"}
            </button>
          </form>
        </div>

        {/* ===== TABLE ===== */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-4">
            All Banners
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2 text-left">Preview</th>
                  <th className="p-2 text-left">Title</th>
                  <th className="p-2 text-left">Redirect</th>
                  <th className="p-2 text-left">Video</th>
                  <th className="p-2 text-left">Status</th>
                  <th className="p-2 text-left">Action</th>
                </tr>
              </thead>

              <tbody>
                {banners.map((b) => (
                  <tr key={b._id} className="border-t">
                    <td className="p-2">
                      {b.image && (
                        <img
                          src={b.image}
                          className="w-20 sm:w-28 rounded"
                          alt="banner"
                        />
                      )}
                      {b.videoUrl && (
                        <video
                          src={b.videoUrl}
                          className="w-20 sm:w-28 rounded"
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

                    <td className="p-2">
                      {b.videoUrl ? "Yes" : "No"}
                    </td>

                    <td className="p-2">
                      <span
                        className={`px-2 py-1 rounded text-white text-sm ${
                          b.isActive ? "bg-green-500" : "bg-gray-500"
                        }`}
                      >
                        {b.isActive ? "Active" : "Inactive"}
                      </span>
                    </td>

                    <td className="p-2">
                      <button
                        onClick={() => handleDelete(b._id)}
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}

                {banners.length === 0 && (
                  <tr>
                    <td colSpan="6" className="p-4 text-center text-gray-500">
                      No banners found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdsTable;
