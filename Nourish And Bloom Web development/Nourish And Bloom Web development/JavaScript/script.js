// ==========================================
// NOURISH AND BLOOM - FINAL JAVASCRIPT
// ==========================================

document.addEventListener("DOMContentLoaded", function () {
  /* 1. MOBILE HAMBURGER MENU TOGGLE */
  var navToggle = document.querySelector(".nav-toggle");
  var navClose = document.querySelector(".nav-close");
  var siteNav = document.querySelector(".site-nav");

  if (navToggle && siteNav) {
    navToggle.addEventListener("click", function () {
      siteNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", siteNav.classList.contains("is-open"));
    });
  }

  if (navClose && siteNav) {
    navClose.addEventListener("click", function () {
      siteNav.classList.remove("is-open");
      if (navToggle) navToggle.setAttribute("aria-expanded", "false");
    });
  }

  /* 2. WEEKLY SPECIALS POPULATOR */
  var specialsContainer = document.getElementById("specials");
  if (specialsContainer) {
    specialsContainer.innerHTML = `
      <article class="card">
        <h3>Rooftop Basil Pesto Bowl <span class="tag">Vegan</span></h3>
        <p>Freshly harvested Genovese basil, ancient grains, toasted macadamia, and lemon-infused olive oil.</p>
        <p class="price">R115</p>
      </article>
      <article class="card">
        <h3>Blood Orange Immunity Tonic <span class="tag">Signature</span></h3>
        <p>Cold-pressed local blood orange, raw ginger root, turmeric, and a dash of black pepper.</p>
        <p class="price">R62</p>
      </article>
      <article class="card">
        <h3>Fig &amp; Rosemary Sourdough Tart</h3>
        <p>Locally baked sourdough, whipped cashew ricotta, fresh rooftop figs, and rosemary honey drizzle.</p>
        <p class="price">R88</p>
      </article>
    `;
  }

  /* 3. FAQ ACCORDION INTERACTIVITY */
  document.querySelectorAll(".accordion-btn").forEach(function (button) {
    button.addEventListener("click", function () {
      var panelId = button.getAttribute("aria-controls");
      var panel = document.getElementById(panelId);
      if (!panel) return;
      var isOpen = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!isOpen));
      panel.hidden = isOpen;
    });
  });

  /* 4. ACCESSIBLE IMAGE LIGHTBOX WITH CAPTIONS */
  var lightboxImages = document.querySelectorAll("img[data-lightbox]");
  if (lightboxImages.length) {
    var lightbox = document.querySelector(".lightbox");
    if (!lightbox) {
      lightbox = document.createElement("div");
      lightbox.className = "lightbox";
      lightbox.setAttribute("role", "dialog");
      lightbox.setAttribute("aria-modal", "true");
      lightbox.hidden = true;
      lightbox.innerHTML = `
        <button class="lightbox-close" type="button" aria-label="Close image">&times;</button>
        <div class="lightbox-content">
          <img alt="">
          <p class="lightbox-caption"></p>
        </div>
      `;
      document.body.appendChild(lightbox);
    }

    var enlarged = lightbox.querySelector("img");
    var caption = lightbox.querySelector(".lightbox-caption");
    var closeButton = lightbox.querySelector(".lightbox-close");

    var closeLightbox = function () {
      lightbox.hidden = true;
      document.body.style.overflow = "";
    };

    lightboxImages.forEach(function (image) {
      image.addEventListener("click", function (event) {
        event.preventDefault();
        enlarged.src = image.currentSrc || image.src;
        enlarged.alt = image.alt || "Nourish and Bloom Image";
        caption.textContent = image.dataset.caption || image.alt || "Nourish & Bloom Café"; 
        lightbox.hidden = false;
        document.body.style.overflow = "hidden";
        closeButton.focus();
      });
    });

    closeButton.addEventListener("click", closeLightbox);
    lightbox.addEventListener("click", function (event) {
      if (event.target === lightbox) closeLightbox();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
    });
  }

  /* 5. LIVE MENU SEARCH & FILTERS */
  var search = document.getElementById("menu-search");
  if (search) {
    var dietaryFilter = document.getElementById("menu-filter");
    var priceSort = document.getElementById("menu-sort");
    var count = document.getElementById("menu-count");
    var lists = document.querySelectorAll(".menu-list");

    lists.forEach(function (list) {
      Array.prototype.forEach.call(list.children, function (item, index) {
        item.dataset.order = String(index);
      });
    });

    var priceOf = function (item) {
      var price = item.querySelector(".price");
      return price ? parseInt(price.textContent.replace(/\D/g, ""), 10) || 0 : 0;
    };

    var updateMenu = function () {
      var query = search.value.trim().toLowerCase();
      var diet = dietaryFilter ? dietaryFilter.value : "";
      var sortVal = priceSort ? priceSort.value : "";
      var visibleCount = 0;

      lists.forEach(function (list) {
        var items = Array.prototype.slice.call(list.children);
        items.sort(function (first, second) {
          if (sortVal === "low") return priceOf(first) - priceOf(second);
          if (sortVal === "high") return priceOf(second) - priceOf(first);
          return Number(first.dataset.order) - Number(second.dataset.order);
        });

        items.forEach(function (item) {
          var matches = (!query || item.textContent.toLowerCase().includes(query)) &&
            (!diet || item.textContent.toLowerCase().includes(diet));
          item.hidden = !matches;
          if (matches) visibleCount += 1;
          list.appendChild(item);
        });
      });

      if (count) count.textContent = visibleCount + " menu item" + (visibleCount === 1 ? "" : "s") + " shown.";
    };

    [search, dietaryFilter, priceSort].forEach(function (control) {
      if (control) {
        control.addEventListener("input", updateMenu);
        control.addEventListener("change", updateMenu);
      }
    });
    updateMenu();
  }

  /* 6. ENQUIRY FORM DISPATCH */
  var enquiryForm = document.getElementById("enquiry-form");
  if (enquiryForm) {
    enquiryForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var note = enquiryForm.querySelector(".form-note");
      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        note.className = "form-note is-error";
        note.textContent = "Please fill in all required fields.";
        return;
      }

      var subject = "Booking Enquiry from " + name;
      var body = "Name: " + name + "\nEmail: " + email + "\nDetails:\n" + message;
      
      note.className = "form-note is-success";
      note.textContent = "Thank you! Opening your email client to dispatch your enquiry...";

      setTimeout(function () {
        window.location.href = "mailto:hello@nourishandbloom.co.za?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        enquiryForm.reset();
      }, 600);
    });
  }

  /* 7. CONTACT FORM DISPATCH */
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();
      var note = contactForm.querySelector(".form-note");
      var name = document.getElementById("cname").value.trim();
      var email = document.getElementById("cemail").value.trim();
      var message = document.getElementById("cmessage").value.trim();

      if (!name || !email || !message) {
        note.className = "form-note is-error";
        note.textContent = "Please fill in all required fields.";
        return;
      }

      var subject = "Contact Message from " + name;
      var body = "Name: " + name + "\nEmail: " + email + "\nMessage:\n" + message;

      note.className = "form-note is-success";
      note.textContent = "Your email application is opening with the message ready to send.";

      setTimeout(function () {
        window.location.href = "mailto:hello@nourishandbloom.co.za?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
        contactForm.reset();
      }, 600);
    });
  }
});