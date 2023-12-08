import Navbar from "../../components/Navbar/Navbar";
import NotFound from "../../assets/404.png";
function Page404() {
  return (
    <>
      <Navbar />
      <h1 className="text-3xl font-bold font-main text-center mt-10 mb-5">
        We are sorry this page is not found
      </h1>
      <img src={NotFound} alt="page 404" className="mx-auto w-[350px]" />
    </>
  );
}

export default Page404;
