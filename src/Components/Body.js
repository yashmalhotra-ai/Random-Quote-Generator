import { useEffect, useState } from "react";
function Body() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // https://api.quotable.io/quotes/random?tags=education
    fetch('https://api.quotable.io/tags',
      {
        method: "GET"
      }).then(response => response.json())
      .then((data) => {
        setData(data)
      })
      .catch((err) => console.log(err));
  }, [])
  return (
    <>
      <section class="bg-gradient-to-r from-themeColor1 to-theneColor2 body-font relative font-poppins text-white">
        <div class="flex flex-col items-center container m-auto  h-screen">
          <div class="flex flex-col w-[500px] min-h-5 mb-12 mt-20 bg-boxbackground rounded-[60px]">
            <p class=" w-[85%]  m-auto pt-4 text-textColor leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
            <p class=" w-[85%]  m-auto pt-4 text-center text-textColor leading-relaxed text-base">-Albert Einstein</p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div className="flex justify-center p-2 w-full items-center text-black font-poppins">
                <select>
                <option key={0} value="none">None</option>
                  {(data).map((item) =>
                  (<option key={item.id} value={item.slug}>
                    {item.name}
                  </option>))}
                </select>
              </div>

              <div class="flex justify-center p-2 w-full items-center">
                <button type="button" class="flex mx-auto text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Next Quote</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Body;
