

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export const uploadToCloudinary = async (file: File): Promise<string> => {
  if (!cloudName || !uploadPreset) {
    // --- Enhanced Error Logging for easier debugging ---
    console.group("Cloudinary Configuration Error");
    console.error(
      "Cloudinary credentials (cloud name and upload preset) are not set in environment variables."
    );
    console.log("Expected variable names in .env file: VITE_CLOUDINARY_CLOUD_NAME, VITE_CLOUDINARY_UPLOAD_PRESET");
    console.log(
      "Value for VITE_CLOUDINARY_CLOUD_NAME:",
      cloudName === undefined ? 'undefined' : `"${cloudName}"`
    );
    console.log(
      "Value for VITE_CLOUDINARY_UPLOAD_PRESET:",
      uploadPreset === undefined ? 'undefined' : `"${uploadPreset}"`
    );
    console.log("All available VITE_ variables:", Object.keys(import.meta.env).filter(k => k.startsWith('VITE_')));
    console.warn(
      "Please ensure your .env file is in the project root and that you have RESTARTED the Vite development server since last changing it."
    );
    console.groupEnd();
    
    const alertMessage = `Cloudinary is not configured. 
- Cloud Name: ${cloudName ? 'OK' : 'MISSING'}
- Upload Preset: ${uploadPreset ? 'OK' : 'MISSING'}

Please check your .env file and restart the server. More details in the console.`;

    alert(alertMessage);
    throw new Error("Cloudinary configuration missing.");
  }

  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', uploadPreset);

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
       const errorData = await response.json();
       console.error("Cloudinary upload error:", errorData);
       throw new Error(`Failed to upload image to Cloudinary. Status: ${response.status}`);
    }

    const data = await response.json();
    return data.secure_url;
  } catch (error) {
     console.error("Error uploading to Cloudinary:", error);
     alert("There was an error uploading the image. Please try again.");
     throw error;
  }
};