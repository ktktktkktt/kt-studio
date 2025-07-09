
const Blog = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="section-padding bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-gradient">Блог</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Полезные статьи и экспертные материалы
          </p>
        </div>
      </section>
      
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <p className="text-lg text-gray-600">
            Раздел в разработке. Скоро здесь будут опубликованы полезные статьи.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
