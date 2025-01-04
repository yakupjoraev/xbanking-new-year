export default function Form() {
  return (
    <div className="flex gap-32 lg:gap-8 lg:flex-col container mx-auto px-4 py-16" id="form">
      <div className="flex flex-col gap-6 w-1/2 lg:w-full">
        <h2 className="text-[42px] xl:text-4xl lg:text-3xl font-bold leading-none mb-9 lg:mb-4 md:mb-2">
          Have a
          <span className="text-[#FFB800] bg-[#FFB800]/10 px-2 rounded inline-block mb-2">
            question?
          </span>{' '}
          <br />
          Write to us!
        </h2>
        <p className="text-[#1f2226] text-lg max-w-[468px] lg:max-w-full">
          Posuere purus facilisi lobortis augue blandit vitae. Pharetra sagittis vel consectetur
          integer augue volutpat lectus. Ultrices enim congue pellentesque leo lobortis diam nec.
          Cras lectus pellentesque et mauris placerat. Volutpat in risus felis nunc at sit.
        </p>
      </div>

      <form action="#" className="flex flex-col gap-4 w-1/2 lg:w-full">
        <div>
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-transparent outline-0 rounded-lg transition-all duration-300
             bg-white py-4 px-8 text-[#1f2226] text-lg :placeholder:text-[#ccc] hover:border-yellow"
          />
        </div>

        <div>
          <input
            type="email"
            placeholder="E-mail"
            className="w-full border border-transparent outline-0 rounded-lg transition-all duration-300
             bg-white py-4 px-8 text-[#1f2226] text-lg :placeholder:text-[#ccc] hover:border-yellow"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Telegram handle"
            className="w-full border border-transparent outline-0 rounded-lg transition-all duration-300
             bg-white py-4 px-8 text-[#1f2226] text-lg :placeholder:text-[#ccc] hover:border-yellow"
          />
        </div>

        <div>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            className="w-full h-48 resize-none border border-transparent outline-0 rounded-lg transition-all duration-300
             bg-white py-4 px-8 text-[#1f2226] text-lg :placeholder:text-[#ccc] hover:border-yellow"
          />
        </div>

        <div>
          <button
            className="min-w-44 w-fit py-5 px-5 bg-gradient-to-r from-[#05cdfe] to-[#6b47fb] rounded-lg 
                            text-white font-semibold text-base 
                            transition-all duration-300 hover:text-yellow hover:border-yellow hover:bg-transparent
                            xl:py-2 xl:px-4 lg:py-2 lg:px-3 lg:min-w-24 md:w-full"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
