import { Trans, useTranslation } from 'react-i18next'
import codingImg from '../assets/images/coding.svg'
import NativeLink from '../components/NativeLink'
import Heading from './Heading'
import Paragraph from './Paragraph'

const Hero = () => {
  const { t } = useTranslation('translation')

  return (
    <section
      itemScope
      itemType="https://schema.org/Person"
      itemRef="languages skills social"
      className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center"
    >
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <Heading
          level={1}
          text={
            <Trans
              i18nKey="hero.title"
              components={{
                span_tag: <span itemProp="name" />,
              }}
            />
          }
        />
        <Paragraph
          className="xl:text-2xl lg:text-lg"
          marginBottom={8}
          text={
            <Trans
              i18nKey="hero.description"
              components={{
                span_tag: <span itemProp="jobTitle" />,
              }}
            />
          }
        />
        <div className="flex justify-center gap-4 flex-col sm:flex-row">
          <NativeLink
            url="#contact"
            className="inline-flex text-white bg-green-700 border-0 py-2 px-6 hover:bg-green-600 rounded text-lg mb-4 text-center"
            label={t('hero.mainCta')}
          />
          <NativeLink
            url="#projects"
            className="inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 hover:bg-gray-700 hover:text-white rounded text-lg mb-4 text-center"
            label={t('hero.secondaryCta')}
          />
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
