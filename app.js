const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navigation-icons a");

const options = {
  threshold: 0.6 
};

let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === entry.target.id) {
          link.classList.add("active");
        }
      });
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

document.getElementById("downloadBtn").addEventListener("click", function () {
    // Path to your CV file
    const cvFile = "CV.pdf";

    // Create a temporary <a> element
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "Javokhir-CV.pdf"; // File name for the download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });