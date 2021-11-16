import { useRouter } from "next/dist/client/router";
import { useRef, useState } from "react";
const data = {
  provinsi: [
    {
      name: "Jawa Barat",
      kota: ["Cianjur", "Bandung", "Karawang", "Sukabumi", "Bekasi"],
    },
    {
      name: "DKI Jakarta",
      kota: [
        "Jakarta Timur",
        "Jakarta Selatan",
        "Jakarta Barat",
        "Jakarta Pusat",
        "Jakarta Utara",
      ],
    },
  ],
};
function RegistrationForm() {
  const [isInvalid, setIsInvalid] = useState(false);
  const [selectedProvinsi, setSelectedProvinsi] = useState();
  const [selectedKota, setSelectedKota] = useState();
  const availableKota = data.provinsi.find((d) => d.kota === selectedKota);
  const fistNameRef = useRef();
  const lastNameRef = useRef();
  const emailInputRef = useRef();
  const passInputRef = useRef();
  const genderRef = useRef();
  const router = useRouter();
  function loginHandler(event) {
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPass = passInputRef.current.value;
    const enteredFirstName = fistNameRef.current.value;
    const enteredLastName = lastNameRef.current.value;
    const enteredGender = genderRef.current.value;

    if (
      !enteredEmail ||
      enteredEmail.trim() === "" ||
      !enteredEmail.includes("@") ||
      !enteredPass ||
      enteredPass.trim() === "" ||
      enteredFirstName.trim() === "" ||
      enteredLastName.trim() === "" ||
      enteredGender.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    router.push("/");
  }
  return (
    <div className="grid place-items-center h-screen">
      <form class="w-full max-w-sm" onSubmit={loginHandler}>
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            First Name
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="name"
            ref={fistNameRef}
          />
        </div>
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Last Name
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="name"
            ref={lastNameRef}
          />
        </div>
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Email
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="email"
            ref={emailInputRef}
          />
        </div>

    
          <div class="md:w-1/3">
            <label
              class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-password"
            >
              Password
            </label>
          </div>
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-password"
              type="password"
              ref={passInputRef}
            />
          </div>
    
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Gender
          </label>
        </div>
        <div class="md:w-2/3">
          <select
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="name"
            ref={genderRef}
          >
          <option>Laki-laki</option>
          <option>Perempuan</option>
          </select>
        </div>
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Provinsi
          </label>
        </div>
        <div class="md:w-2/3">
          <select
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            onChange={(e)=>setSelectedProvinsi(e.target.value)}
          >
          {data.provinsi.map((value,key)=>{
              return(<option value={value.name} key={key}>{value.name}</option>)
          })}
          </select>
        </div>
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Kota
          </label>
        </div>
        <div class="md:w-2/3">
          <select
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            onChange={(e)=>setSelectedKota(e.target.value)}
          >
          {availableKota?.name.map((e,key)=>{
              return(<option value={e.name} key={key}>{e.name}</option>)
          })}
          </select>
        </div>
        {isInvalid && (
          <p className="text-red-500 mb-5">Please enter a valid data!</p>
        )}
        <div class="md:flex md:items-center">
          <div class="md:w-2/3">
            <button class="m-2 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default RegistrationForm;
