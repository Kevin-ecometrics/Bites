import React from "react";

const Form: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("TRUE");
  };
  return (
    <div className="py-8 relative">
      <img
        src="https://girlboss.com/cdn/shop/files/GB_Web_Hero_Daily_2880x1269_2x_04504c9a-067d-4a0f-811a-0e971b787afa_1024x1024.jpg?v=1674706567"
        alt=""
        className="w-full"
      />
      <div className="absolute w-96 top-[40%] right-[20%] md:block hidden ">
        <h1 className="text-4xl mb-4">Get the Girlboss daily</h1>
        <p className="text-xl mb-8">
          Sign up for must-read career intel + inspo straight to your inbox!
        </p>
        <form onSubmit={handleSubmit} className="flex">
          <input
            className="p-4  focus:outline-none"
            type="email"
            placeholder="Email Address"
          />
          <button
            type="submit"
            className="bg-black focus:outline-none
            hover:opacity-75
        text-white p-4"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
