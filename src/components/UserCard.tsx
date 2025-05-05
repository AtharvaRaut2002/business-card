// src/components/UserCard.tsx
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useParams } from 'react-router-dom';

type User = {
    name: string;
    email: string;
    avatar: string;
    role: string;
    company: string;
    skills: string[];
    gallery_images: string[];
    about_me: string;
    website:string;
  };

const sampleUser: User = {
  name: 'Jonathan Doe',
  email: 'jonathan@example.com',
  avatar: '', 
  role: 'Marketing Expert',
  company: 'ABC Company',
  skills: ['SEO', 'Analytics', 'Campaign Management', 'Segmentation'],
  "gallery_images": [
    "https://media.istockphoto.com/id/121199853/photo/closeup-of-guy-working-on-a-laptop-indoor.webp?a=1&b=1&s=612x612&w=0&k=20&c=1cFqSPIjH981E69lJFNrRiqUDDsOqHfRdpW2CKu9sSc=", 
    "https://media.istockphoto.com/id/1265024528/photo/no-better-adventure-buddy.webp?a=1&b=1&s=612x612&w=0&k=20&c=tStWgNSFBAGPyu4gfJfDEjqMPDnvgqWUkIPyZYGS090=", 
    "https://media.istockphoto.com/id/1322104312/photo/freedom-chains-that-transform-into-birds-charge-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=ppUQ4yMvcMkVFKL9yPh1n3w5iqFW5Gh59YL-6DjqQXg=", 
    "https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
  ] ,
  about_me: "I’m a highly skilled marketing professional with over 7 years of industry experience.", 
  website: "https://example.com", 
};

const UserCard = () => {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    console.log("Fetching user data...", id);
    if (id) {
      fetch(` http://127.0.0.1:8000/api/users/${id}/`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`User not found (status: ${res.status})`);
          }
          return res.json();
        })
        .then((data) => setUser(data))
        .catch((err) => {
          console.error(err);
          console.log("Using sample user data as fallback.");
          setUser(sampleUser); // fallback if fetch fails
        });
    } else {
      setUser(sampleUser); // fallback when no ID is present
    }
  }, [id]);

  if (!user) return <p className="text-center text-white">Loading...</p>;
return (
    <div className='flex justify-content-center items-center p-0 m-0 text-[#1532CB] dark:text-[#F2F2F2]'>
        <div className="relative overflow-hidden border border-1 border-gray-100 top-5 rounded-lg p-4 max-w-sm mx-auto w-[380px] bg-white dark:bg-[#170C0C] my-[25px] px-[30px] h-[670px]">
          <div className='w-[80%] h-[60%] bg-[#FDB2FF] dark:bg-[#6C256D] rounded-bl-[100%] absolute my-[50px] z-1 top-[10px] right-0 translate-x-0 translate-y-[-40px] blur-[50px] dark:blur-[50px]'></div>
          <div className='w-[55%] h-[35%] bg-[#C1F0FF] dark:bg-[#4991A8] rounded-bl-[100%] absolute my-[50px] z-1 top-[10px] left-0 translate-x-[-50px] translate-y-[-40px] blur-[30px] dark:blur-[50px]'></div>

          <div className="relative z-3">
            <div className="relative mx-auto mt-[5%] bg-white rounded-full w-[150px] h-[150px] border border-2 border-white">
              <img src="../public/image.png" alt="User Avatar" className="w-full h-full rounded-full" />
              <FaPlus className="absolute bottom-4 right-1 text-[#545454] bg-white rounded-full p-1 w-6 h-6" />
            </div>
            <div>
              <h1 className="text-center text-2xl font-bold mt-4">{user.name}</h1>
              <p className="text-center">{user.role}</p>
              <p className="text-center">{user.company}</p>
            </div>
            <div className="flex justify-center mt-5 space-x-4 mb-4 text-2xl">
              <a className="cursor-pointer" href={`mailto:${user.email}`}>@</a>
              <a className="cursor-pointer" href={user?.website} target="_blank">🌐</a>
              <span className="cursor-pointer">⋮</span>
            </div>

            {/* About Me */}
            <h2 className="text-lg font-bold mb-1">About Me</h2>
            <p className="text-sm mb-4 ">
              {user.about_me}
            </p>

            {/* Skills Section */}
            <h3 className="text-md font-bold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {user && user?.skills && user?.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm border border-blue-800 dark:border-white rounded-full hover:bg-blue-100 transition"
                >
                  {skill}
                </span>
              ))}
            </div>


            <div className='flex justify-center mt-5 space-x-4 mb-4 text-2xl'>

              {
                user && user?.gallery_images && user?.gallery_images.map((image, idx) => (
                  <img key={idx} src={image} alt={`Gallery Image ${idx + 1}`} className="rounded-md w-[80px] h-[80px]" />
                ))
              }
            </div>
          </div>
        </div>
      </div>
 );
};

export default UserCard;