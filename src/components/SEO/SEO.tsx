import React from "react";
import ISEO from "./SEO.types";

const SEO = ({
  title,
  description,
  keywords,
  externalScripts,
  canonicalUrl,
  ogType,
  ogUrl,
  ogTitle,
  ogDescription,
  ogImage,
  ogLocale,
  ogVideo,
  ogVideoUrl,
  ogVideoSecureUrl,
  ogVideoType,
  ogVideoWidth,
  ogVideoHeight,
  ogImageUrl,
  ogImageSecureUrl,
  ogImageType,
  ogImageWidth,
  ogImageHeight,
  fbAppId,
  twCard,
  twSite,
  twCreator,
}: ISEO) => {
  return (
    <>
      <title>{`Oakfusion ${title && `- ${title}`}`}</title>
      <meta charSet="utf-8" />
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}

      {ogType && <meta property="og:type" content={ogType} />}
      {ogUrl && <meta property="og:url" content={ogUrl} />}
      {ogTitle && <meta property="og:title" content={ogTitle} />}
      {ogDescription && (
        <meta property="og:description" content={ogDescription} />
      )}
      {ogImage && <meta property="og:image" content={ogImage} />}

      {ogLocale && <meta property="og:locale" content={ogLocale} />}
      {ogVideo && <meta property="og:video" content={ogVideo} />}
      {ogVideoUrl && <meta property="og:video:url" content={ogVideoUrl} />}
      {ogVideoSecureUrl && (
        <meta property="og:video:secure_url" content={ogVideoSecureUrl} />
      )}
      {ogVideoType && <meta property="og:video:type" content={ogVideoType} />}
      {ogVideoWidth && (
        <meta property="og:video:width" content={ogVideoWidth} />
      )}
      {ogVideoHeight && (
        <meta property="og:video:height" content={ogVideoHeight} />
      )}

      {ogImage && <meta property="og:image" content={ogImage} />}
      {ogImageUrl && <meta property="og:image:url" content={ogImageUrl} />}
      {ogImageSecureUrl && (
        <meta property="og:image:secure_url" content={ogImageSecureUrl} />
      )}
      {ogImageType && <meta property="og:image:type" content={ogImageType} />}
      {ogImageWidth && (
        <meta property="og:image:width" content={ogImageWidth} />
      )}
      {ogImageHeight && (
        <meta property="og:image:height" content={ogImageHeight} />
      )}

      {fbAppId && <meta property="fb:app_id" content={fbAppId} />}

      {twCard && <meta name="twitter:card" content={twCard} />}
      {twSite && <meta name="twitter:site" content={twSite} />}
      {twCreator && <meta name="twitter:creator" content={twCreator} />}

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      <meta lang="en" />

      {externalScripts &&
        externalScripts.map((el, idx) => (
          <script key={idx} src={el} async defer></script>
        ))}
    </>
  );
};

export default SEO;
