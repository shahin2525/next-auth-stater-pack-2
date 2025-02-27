import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      {session?.user && (
        <div>
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Welcome To {session?.user?.email}
          </h1>
          <Image
            className="mx-auto rounded-full"
            alt="user image"
            height={100}
            width={100}
            src={session?.user?.image}
          />
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
