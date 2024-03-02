import Status from "./_components/Status";
import Detailing from "./_components/Detailing";

const User = ({ params }: { params: { slug: string[] } }) => {
  console.log(params);
  return (
    <>
      <section className="text-gray-600 body-font">
        <Detailing />
      </section>

      <section className="text-gray-600 body-font">
        <Status />
      </section>
    </>
  );
};

export default User;
