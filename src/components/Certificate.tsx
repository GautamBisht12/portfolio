import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Certifications = () => {
  return (
    <>
      {/* Experience Section */}
      <section className="py-20 px-4" id="experience">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Work Experience
          </h2>
          <div className="space-y-8">
            <Card className="bg-white/5 backdrop-blur-lg border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Web Developer</CardTitle>
                <p className="text-zinc-300">
                  Upsell Ecommerce • 2024 - Present
                </p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-zinc-300">
                  <li>
                    Developed and customized e-commerce websites for clients
                    using WordPress and themes.
                  </li>
                  <li>
                    Created web applications and Chrome extensions to optimize
                    company workflows and processes.
                  </li>

                  <li>
                    Managed, maintained, and ensured the performance of
                    developed web applications and extensions.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="py-20 px-4" id="experience">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Certification
          </h2>
          <div className="space-y-8">
            <Card className="bg-white/5 backdrop-blur-lg border-white/10 flex">
              <div>
                <CardHeader>
                  <CardTitle className="text-white">
                    MERN Full Stack Development -{" "}
                    <a
                      href="https://ducatindia.com/"
                      className="text-yellow-400"
                      target="_blank"
                    >
                      DuCat
                    </a>
                  </CardTitle>
                  <p className="text-zinc-300">2023 - 2024</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2 text-zinc-300">
                    <li>
                      Learned core frontend technologies including HTML, CSS,
                      JavaScript, Bootstrap, and React for creating responsive
                      and dynamic user interfaces.
                    </li>
                    <li>
                      Gained proficiency in backend development using Node.js
                      and Express to build scalable server-side applications.
                    </li>
                    <li>
                      Worked with MongoDB for database management, implementing
                      CRUD operations and data modeling.
                    </li>
                    <li>
                      Completed hands-on projects, including an e-commerce
                      platform and a blogging application, showcasing the
                      integration of full-stack technologies.
                    </li>
                    <li>
                      Developed a deep understanding of RESTful API design, user
                      authentication, and application deployment practices.
                    </li>
                  </ul>
                </CardContent>
              </div>
              <div>
                <img
                  src="assets/ducat.png"
                  alt="DuCat-certificate"
                  className="w-full h-auto rounded-lg cursor-pointer hover:opacity-80"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "assets/ducat.png";
                    link.download = "Ducat_MERN_Certificate.jpg";
                    link.click();
                  }}
                />
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default Certifications;
