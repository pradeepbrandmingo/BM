import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Page load ke baad hide
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // timing change kar sakte ho

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="preloader is-loading">
          <div className="preloader-inner">
            <div className="preloader-ball-wrap">
              <div className="preloader-ball-inner-wrap">
                <div className="preloader-ball-inner">
                  <div className="preloader-ball"></div>
                </div>
                <div className="preloader-ball-shadow"></div>
              </div>

              <div id="weave-anim" className="preloader-text">
                Loading...
              </div>
            </div>
          </div>

          <div className="preloader-overlay"></div>
        </div>
      )}
    </>
  );
};

export default Preloader;
