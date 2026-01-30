export const InputProfile = ({
  label,
  formsContainer,
  error,
  required,
  uploadImageDisplay,
  imgUrl,
  fileUploadRef,
  handleImageUpload,
  deleteImage,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-1.5">
        <p className="text-sm mt-2">{label}</p>
        {required && <p className="text-red-500 mt-1 font-extrabold">*</p>}
      </div>

      <div className="flex items-center w-104 h-45 bg-gray-100 justify-center relative">
        {imgUrl && (
          <img
            onClick={handleImageUpload}
            src={imgUrl}
            className="w-full h-full object-cover"
            alt="selected image"
          />
        )}

        <input
          ref={fileUploadRef}
          type="file"
          className={`border border-gray-300 rounded-md ${imgUrl && "hidden"}  ${error ? "border-red-500" : ""}`}
          onChange={uploadImageDisplay}
          name={formsContainer}
        />
        <p
          className="absolute top-0 right-0 bg-black text-white p-1 mr-2 mt-2 rounded-full w-6 h-6 flex justify-center items-center"
          onClick={deleteImage}
        >
          x
        </p>
      </div>
      <p className="text-red-500 text-xs">{error}</p>
    </div>
  );
};
