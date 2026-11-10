(function () {
  document.documentElement.classList.remove("no-js");
  document.documentElement.classList.add("js");

  var navToggle = document.querySelector(".nav-toggle");
  var siteNav = document.getElementById("site-nav");

  if (navToggle && siteNav) {
    var setNavOpen = function (open) {
      navToggle.setAttribute("aria-expanded", String(open));
      siteNav.classList.toggle("is-open", open);
    };

    var isNavOpen = function () {
      return navToggle.getAttribute("aria-expanded") === "true";
    };

    navToggle.addEventListener("click", function () {
      setNavOpen(!isNavOpen());
    });

    siteNav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setNavOpen(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && isNavOpen()) {
        setNavOpen(false);
        navToggle.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (isNavOpen() && !event.target.closest(".site-header")) {
        setNavOpen(false);
      }
    });

    var desktopQuery = window.matchMedia("(min-width: 901px)");
    var handleDesktopChange = function (event) {
      if (event.matches) {
        setNavOpen(false);
      }
    };

    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener("change", handleDesktopChange);
    } else if (desktopQuery.addListener) {
      desktopQuery.addListener(handleDesktopChange);
    }
  }

  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll(".nav-list a[href^='#']")
  );

  var setCurrentSection = function (sectionId) {
    navLinks.forEach(function (link) {
      if (link.getAttribute("href") === "#" + sectionId) {
        link.setAttribute("aria-current", "true");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      setCurrentSection(link.getAttribute("href").slice(1));
    });
  });

  if (navLinks.length && "IntersectionObserver" in window) {
    var sections = navLinks
      .map(function (link) {
        return document.querySelector(link.getAttribute("href"));
      })
      .filter(Boolean);

    var sectionObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-32% 0px -58% 0px",
        threshold: 0
      }
    );

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }

  var dialog = document.getElementById("image-dialog");
  var dialogImage = document.getElementById("dialog-image");
  var dialogCaption = document.getElementById("dialog-caption");
  var lastDialogTrigger = null;

  if (dialog && dialogImage && dialogCaption) {
    var closeDialog = function () {
      if (dialog.open) {
        dialog.close();
      }
    };

    var zoomButtons = document.querySelectorAll("[data-dialog-image]");

    zoomButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        lastDialogTrigger = button;
        dialogImage.src = button.getAttribute("data-dialog-image");
        dialogImage.alt = button.getAttribute("data-dialog-alt") || "";
        dialogCaption.textContent =
          button.getAttribute("data-dialog-caption") || "";

        if (typeof dialog.showModal === "function") {
          dialog.showModal();
          document.body.classList.add("modal-open");
        } else {
          window.open(dialogImage.src, "_blank", "noopener,noreferrer");
        }
      });
    });

    var dialogClose = dialog.querySelector("[data-dialog-close]");

    if (dialogClose) {
      dialogClose.addEventListener("click", closeDialog);
    }

    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) {
        closeDialog();
      }
    });

    dialog.addEventListener("close", function () {
      document.body.classList.remove("modal-open");

      if (lastDialogTrigger) {
        lastDialogTrigger.focus();
        lastDialogTrigger = null;
      }
    });
  }
})();
