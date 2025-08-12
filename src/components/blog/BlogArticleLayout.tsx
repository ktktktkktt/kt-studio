import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import React from "react";

type Hero = {
  src: string;
  alt: string;
  heightClass?: string; // e.g. "h-80" | "h-96"
};

interface BlogArticleLayoutProps {
  title: string;
  description: string;
  canonical: string; // use clean path like "/blog/post-slug"
  author?: string;
  date?: string;
  readTime?: string;
  hero?: Hero;
  tags?: string[];
  children: React.ReactNode;
}

const BlogArticleLayout: React.FC<BlogArticleLayoutProps> = ({
  title,
  description,
  canonical,
  author = "Кирилл Ткаченко",
  date,
  readTime,
  hero,
  tags,
  children,
}) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    author: { "@type": "Person", name: author },
    inLanguage: "ru-RU",
    ...(date ? { datePublished: date } : {}),
  };

  return (
    <div className="min-h-screen pt-16">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <article className="section-padding bg-background">
        <div className="container-custom max-w-5xl">
          <Link to="/blog" className="inline-flex items-center text-accent hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Назад к блогу
          </Link>

          <header className="mb-10">
            {hero?.src && (
              <img
                src={hero.src}
                alt={hero.alt}
                className={`w-full ${hero.heightClass ?? "h-96"} object-cover rounded-2xl mb-8`}
                loading="lazy"
              />
            )}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {title}
            </h1>
            {(author || date || readTime) && (
              <div className="flex items-center text-muted-foreground text-sm md:text-base">
                {author && (
                  <div className="flex items-center mr-6">
                    <User className="w-4 h-4 mr-1" />
                    {author}
                  </div>
                )}
                {date && (
                  <div className="flex items-center mr-6">
                    <Calendar className="w-4 h-4 mr-1" />
                    {date}
                  </div>
                )}
                {readTime && (
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {readTime}
                  </div>
                )}
              </div>
            )}
          </header>

          <div className="prose prose-lg md:prose-xl max-w-none">
            {children}
          </div>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-8 mt-10 border-t border-border">
              {tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </div>
  );
};

export default BlogArticleLayout;
