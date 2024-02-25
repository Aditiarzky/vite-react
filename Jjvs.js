try {
    /// upload image ke pihak ke tiga

    const files = document.querySelectorAll("#cover-upload");
    const url = document.querySelectorAll("#cover-url");
    const notif = document.querySelectorAll(".notifs");
    const waitsubmit = document.querySelectorAll(".waitsubmit");
    const imgurId = '023f4ffcaf1f4d9';

    files.forEach((file) => {
        file.addEventListener("change", (ev) => {
            const formData = new FormData();
            formData.append("image", ev.target.files[0]);

            notif.forEach((urlElement) => {
                urlElement.textContent = "Gambar sedang diupload...";
            });

            waitsubmit.forEach((urlElement) => {
                urlElement.disabled = true;
            });

            fetch("https://api.imgur.com/3/image", {
                method: "post",
                headers: {
                    Authorization: `Client-ID ${imgurId}`,
                },
                body: formData,
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.success) {
                        url.forEach((urlElement) => {
                            urlElement.value = data.data.link;
                        });
                        notif.forEach((urlElement) => {
                            urlElement.textContent = "Berhasil diupload.";
                        });
                        waitsubmit.forEach((urlElement) => {
                            urlElement.disabled = false;
                        });
                    } else {
                        console.error("Error uploading image:", data.error);
                        notif.forEach((urlElement) => {
                            urlElement.textContent =
                                "Gagal mengupload gambar.";
                        });
                        waitsubmit.forEach((urlElement) => {
                            urlElement.disabled = true;
                        });
                    }
                })
                .catch((error) => {
                    console.error("Error uploading image:", error);
                    notif.forEach((urlElement) => {
                        urlElement.textContent = "Gagal mengupload gambar.";
                    });
                    waitsubmit.forEach((urlElement) => {
                        urlElement.disabled = true;
                    });
                });
        });
    });
} catch (imageUploadError) {
    console.error(
        "Error in image pengajuan upload block:",
        imageUploadError
    );
}

try {
  /// upload image ke pihak ke tiga
  const files = document.querySelector("#isigambar-upload");
  const urlContainer = document.querySelector("#isigambar");
  const notif = document.querySelector(".notif-isi");
  const imgurId = '023f4ffcaf1f4d9';
  let imageLinks = [];

  files.addEventListener("change", async (ev) => {
    notif.textContent = "Gambar sedang diupload...";

    const uploadPromises = [];

    for (let i = 0; i < ev.target.files.length; i++) {
      const formData = new FormData();
      formData.append("image", ev.target.files[i]);
      notif.textContent = `Meng-upload gambar ${i}...`;

      const currentUploadPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          fetch("https://api.imgur.com/3/image", {
            method: "post",
            headers: {
              Authorization: `Client-ID ${imgurId}`,
            },
            body: formData,
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.success) {
                resolve(data.data.link);
              } else {
                console.error("Error uploading images:", data.error);
                resolve(null);
              }
            })
            .catch((error) => {
              console.error("Error uploading images:", error);
              resolve(null);
            });
        }, i * 5000); // Penundaan 1 detik untuk setiap permintaan
      });

      uploadPromises.push(currentUploadPromise);
    }

    try {
      const uploadResults = await Promise.all(uploadPromises);
      const validLinks = uploadResults.filter((link) => link !== null);
      imageLinks.push(...validLinks);

      console.log(JSON.stringify(imageLinks));
      urlContainer.value = JSON.stringify(imageLinks);
      notif.textContent = "Berhasil diupload.";
    } catch (error) {
      console.error("Error uploading images:", error);
      notif.textContent = "Gagal mengupload gambar.";
    }
  });
} catch (imageUploadError) {
  console.error("Error in image kamar upload block:", imageUploadError);
}
