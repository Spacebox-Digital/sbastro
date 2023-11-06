import { default as Heading } from './Heading.astro'
import { default as Hero } from './Hero.astro'
import { default as Logo } from './Logo.astro'
import { default as HeroWithContent } from './HeroWithContent.astro'
import { default as HeroRandom } from './HeroRandom.astro'
import { default as CalloutWithImage } from './CalloutWithImage.astro'
import { default as CalloutWithVideo } from './CalloutWithVideo.astro'
import { default as GeneralContent } from './GeneralContent.astro'
import { default as LinksList } from './LinksList.astro'
import { default as TwoColumns } from './TwoColumns.astro'
import { default as IconGrid } from './IconGrid.astro'
import { default as TilesGrid } from './TilesGrid.astro'

export const flexibleContentComponents = {
    ModulesLayoutsHeading: Heading,
    ModulesLayoutsHero: Hero,
    ModulesLayoutsLogo: Logo,
    ModulesLayoutsHeroWithContent: HeroWithContent,
    ModulesLayoutsHeroRandom: HeroRandom,
    ModulesLayoutsCalloutWithImage: CalloutWithImage,
    ModulesLayoutsCalloutWithVideo: CalloutWithVideo,
    ModulesLayoutsGeneralContent: GeneralContent,
    ModulesLayoutsLinksList: LinksList,
    ModulesLayoutsTwoColumns: TwoColumns,
    ModulesLayoutsIconGrid: IconGrid,
    ModulesLayoutsTilesGrid: TilesGrid,

}

// don't really need this but leaving it here
export const getFlexibleContentComponent = (key) => {
    return components[key]
}

export const fragments = `
... on ModulesLayoutsHeading {
    active
    heading
    headingTag
    tailwindClasses
  }
... on ModulesLayoutsHero {
        active
        heroImage {
            node {
                altText
                id
                sourceUrl
                slug
                srcSet
                mediaItemUrl
            }
        }
    }
    ... on ModulesLayoutsLogo {
        __typename
        active
        link {
          target
          title
          url
        }
            width
        logo {
          node {
            altText
            title
            sourceUrl
          }
        }
      }
    ... on ModulesLayoutsHeroRandom {
        active
        desktopImages {
          nodes {
            altText
            caption
            description
            id
            sourceUrl
            uri
          }
        }
        mobileImages {
          nodes {
            altText
            caption
            description
            id
            sourceUrl
            uri
          }
        }
        heading
        content
        cta {
          target
          title
          url
        }
        ctaButtonColor
      }
    ... on ModulesLayoutsHeroWithContent {
        active
      heroImage {
        node {
          altText
          caption
          uri
          title
          status
          sourceUrl
          slug
        }
      }
      heroImageMobile {
        node {
          altText
          caption
          uri
          title
          status
          sourceUrl
          slug
        }
      }
      heading
      heroHeadingMobile
      textSize
      textSizeMobile
      heroContent
      heroCta {
        title
        url
        target
      }
      ctaColor
      contentVerticalPosition
      contentHorizontalPosition
    }
    ... on ModulesLayoutsHeroCarousel {
        active
        desktopImages {
          nodes {
            altText
            sourceUrl
            title
            caption
            description
            id
            uri
          }
        }
        mobileImages {
          nodes {
            altText
            sourceUrl
            title
            caption
            description
            id
            uri
          }
        }
        heading
        headingMobile
        content
        callToAction {
          target
          title
          url
        }
      }
    ... on ModulesLayoutsCalloutWithImage {
        active
        backgroundColor
        imageSide
        image {
          node {
            altText
            sourceUrl
            title
          }
        }
        heading
        calloutContent
        callToAction {
          target
          title
          url
        }
        ctaColor
      }
    ... on ModulesLayoutsCalloutWithVideo {
        active
        backgroundColor
        imageSide
        calloutImage
        heading
        calloutContent
        callToAction {
          target
          title
          url
        }
      }
      ... on ModulesLayoutsIconGrid {
        active
        backgroundColor
        heading
        content
        items {
          icon {
            node {
              altText
              title
              id
              sourceUrl

            }
          }
          heading
          content
          cta {
            target
            title
            url
          }
        }
      }
      ... on ModulesLayoutsTilesGrid {
        active
        backgroundColor
        heading
        headingBackgroundColor
        content
        tiles {
          tileImage {
            node {
              altText
              sourceUrl
              uri
              title
              sizes
            }
          }
          tileHeading
          tileContent
          tileCta {
            target
            title
            url
          }
        }
      }
      ... on ModulesLayoutsLinksList {
            active
          	heading
            links {
              link {
                target
                title
                url
              }
            }
          }
          ... on ModulesLayoutsGeneralContent {
            active
            backgroundColor
            heading
            content
        }
        ... on ModulesLayoutsTwoColumns {
            active
            columns {
              columnBackgroundColor
              heading
              subhead
              content
              cta {
                target
                title
                url
              }
              ctaColor
            }
          }


`
