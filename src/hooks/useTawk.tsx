import React, { useState, useEffect } from "react";

const useTawk = () => {
  const [tawkLoaded, setTawkLoaded] = useState<boolean>(false);
  const [tawkLoading, setTawkLoading] = useState<boolean>(false);

  const onInteractClickHandler = () => {
    const loadTawk = () => {
      if (tawkLoaded === false) {
        setTawkLoading(true);
        window.removeEventListener("scroll", loadTawk);
        setTawkLoaded(true);
        var s1 = document.createElement("script"),
          s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = "https://embed.tawk.to/63e81353474251287912d0b3/1gp18n05m";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        s0.parentNode.insertBefore(s1, s0);

        try {
          setTimeout(() => {
            location.href = "javascript:void(Tawk_API.toggle())";
            setTawkLoading(false);
          }, 2000);
        } catch (err) {
          console.log(err);
        }
      } else {
        location.href = "javascript:void(Tawk_API.toggle())";
        setTawkLoading(false);
      }
    };

    loadTawk();
  };

  useEffect(() => {
    const loadTawk = () => {
      window.removeEventListener("scroll", loadTawk);
      setTawkLoaded(true);
      var s1 = document.createElement("script"),
        s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/63e81353474251287912d0b3/1gp18n05m";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);
    };
    if (tawkLoaded === false) {
      window.addEventListener("scroll", loadTawk);
    }
  }, []);

  return { tawkLoading, onInteractClickHandler };
};

export default useTawk;
