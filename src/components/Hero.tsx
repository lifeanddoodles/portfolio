import codingImg from '../assets/images/coding.svg'

const Hero = () => {
  return (
    <section
      itemScope
      itemType="https://schema.org/Person"
      itemRef="languages skills social"
      className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center"
    >
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font xl:text-5xl sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hi, I&#39;m <span itemProp="name">Sandra Vargas</span>
        </h1>
        <p className="xl:text-2xl lg:text-lg mb-8 leading-relaxed">
          I&#39;m a <span itemProp="jobTitle">Front-end developer</span>{' '}
          interested in the React ecosystem and in the application of{' '}
          accessibility guidelines and Schema Markup.
        </p>
        <div className="flex justify-center">
          <a
            href="#contact"
            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 hover:bg-green-600 rounded text-lg"
          >
            Work with me
          </a>
          <a
            href="#projects"
            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 hover:bg-gray-700 hover:text-white rounded text-lg"
          >
            See my past work
          </a>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src={codingImg}
        />
      </div>
    </section>
  )
}

export default Hero
