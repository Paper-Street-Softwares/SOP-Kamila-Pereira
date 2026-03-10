import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import WordPressBlogCard from "../cards/WordPressBlogCard";
import SectionArea from "../sectionElements/SectionArea";
import SectionWrapper from "../sectionElements/SectionWrapper";

import MotionDivDownToUp from "../animation/MotionDivDownToUp";
import content from "../../content/content";
import SectionHeaderNovo from "../sectionElements/SectionHeaderNovo";

function BlogPosts({ colorMode }) {
  const [posts, setPosts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(3);

  let backgroundMode, titleColor, subtitleColor, linkColor;

  switch (colorMode) {
    case "light":
      backgroundMode = "bg-transparent";
      titleColor = "text-corTitulosPreto";
      subtitleColor = "text-corOutrosTextosPreto";
      linkColor = "text-primaryDark";
      break;
    case "dark":
      backgroundMode = "bg-transparent";
      titleColor = "text-corTitulosBranca";
      subtitleColor = "text-corOutrosTextosPreto";
      linkColor = "text-primaryLight";
      break;
    case "defaultDark":
      backgroundMode = "bg-transparent";
      titleColor = "text-corTitulosPreto";
      subtitleColor = "text-corOutrosTextosPreto";
      linkColor = "text-primaryDark";
      break;
    case "defaultLight":
      backgroundMode = "bg-transparent";
      titleColor = "text-corTitulosPreto";
      subtitleColor = "text-corOutrosTextosPreto";
      linkColor = "text-corTitulosBranca";
  }

  useEffect(() => {
    fetch(
      `https://public-api.wordpress.com/rest/v1.1/sites/${content.texts.blog.blogLink}/posts/`,
    )
      .then((response) => response.json())
      .then((data) => setPosts(data.posts || []))
      .catch((error) => console.error("Erro ao buscar posts:", error));
  }, []);

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1441) {
        setVisibleCount(6);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  return (
    <div>
      <SectionArea className={backgroundMode} paddingbot={false} id="blog">
        <SectionWrapper>
          <div
            class="elementor-element elementor-element-3afb35f elementor-widget elementor-widget-heading"
            data-id="3afb35f"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div class="elementor-widget-container">
              <h2 class="elementor-heading-title elementor-size-default">
                {content.texts.blog.miniTag}
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-fac6d06 elementor-widget elementor-widget-heading"
            data-id="fac6d06"
            data-element_type="widget"
            data-widget_type="heading.default"
          >
            <div class="elementor-widget-container">
              <h2 class="elementor-heading-title elementor-size-default">
                {content.texts.blog.title}
              </h2>
            </div>
          </div>
          <div
            class="elementor-element elementor-element-41af107 elementor-widget elementor-widget-text-editor"
            data-id="41af107"
            data-element_type="widget"
            data-widget_type="text-editor.default"
          >
            <div class="elementor-widget-container">
              {content.texts.blog.subtitle}
            </div>
          </div>

          <ul className="flex flex-wrap gap-[30px] justify-center">
            {posts.slice(0, visibleCount).map((post) => (
              <li key={post.ID}>
                <WordPressBlogCard
                  colorMode={colorMode}
                  img={
                    post.featured_image && (
                      <img
                        src={post.featured_image}
                        alt="Imagem do post"
                        className="rounded-2xl"
                      />
                    )
                  }
                  title={
                    <h1
                      className={titleColor}
                      dangerouslySetInnerHTML={{ __html: post.title }}
                    />
                  }
                  subtitle={
                    <p
                      className={subtitleColor}
                      dangerouslySetInnerHTML={{
                        __html:
                          post.excerpt.length > 100
                            ? post.excerpt.substring(0, 60) + "..."
                            : post.excerpt,
                      }}
                    />
                  }
                  link={post.URL}
                />
              </li>
            ))}
          </ul>

          <MotionDivDownToUp>
            <p
              className={`flex justify-center mx-auto mt-12 scale-100 hover:scale-90 duration-500 w-fit transition-all cursor-pointer ${linkColor} rounded-lg bg-gradient-to-t text-white px-3 py-2 to-[#e29e54] from-[#be8241]`}
            >
              <a
                href={`https://${content.texts.blog.blogLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content.texts.blog.label}
              </a>
            </p>
          </MotionDivDownToUp>
        </SectionWrapper>
      </SectionArea>
    </div>
  );
}

export default BlogPosts;
