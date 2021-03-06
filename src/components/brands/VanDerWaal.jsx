import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { useTranslation } from "react-i18next"
import { makeStyles } from "@material-ui/core/styles"
import Hidden from "@material-ui/core/Hidden"
import Container from "../ui/Container"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-around",
    overflow: "hidden",
    marginTop: 30,
  },
  textContainer: {
    flexBasis: "100%",
    padding: 15,
    [theme.breakpoints.up("sm")]: {
      flexBasis: "50%",
      padding: 30,
    },
    [theme.breakpoints.up("lg")]: {
      flexBasis: "50%",
      padding: 60,
    },
  },
  imgContainer: {
    flexBasis: "100%",
    overflow: "hidden",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "50%",
    },
    [theme.breakpoints.up("md")]: {
      flexBasis: "18%",
    },
  },
  imgContainer2: {
    flexBasis: "100%",
    overflow: "hidden",
    boxShadow: "0px 22px 64px -40px rgba(0,0,0,0.34)",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "50%",
    },
    [theme.breakpoints.up("md")]: {
      flexBasis: "18%",
    },
  },
  titleHolder: {
    display: "flex",
    alignItems: "center",
  },
  title: {
    textTransform: "uppercase",
    fontWeight: 700,
    fontSize: 18,
    margin: 0,
    marginBottom: 5,
  },
  title2: {
    fontWeight: 700,
    fontSize: 18,
    margin: 0,
    color: theme.palette.primary.dark,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  title3: {
    fontWeight: 700,
    textTransform: "lowercase",
    fontSize: 14,
    margin: 0,
  },
  img: {
    width: "100%",
    height: 400,
  },
  img2: {
    width: "100%",
    height: 300,
  },
  logoContainer: {
    display: "flex",
  },
  circle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: "50%",
    // background: theme.palette.primary.main,
    marginRight: 15,
  },
  logo: {
    width: 80,
  },
  link: {
    cursor: "pointer",
  },
  text: {
    marginBottom: 30,
  },
}))

export default function VanDerWaal() {
  const classes = useStyles()
  const { t } = useTranslation()

  const brand = {
    key: "waal",
    name: "Van der Waal",
    website: "https://secondwavesurfing.com/shop/brand/van-der-waal/",
  }

  return (
    <Container background="gray">
      <div className={classes.root}>
        <div className={classes.textContainer}>
          <p className={classes.title}>{t(`brands.${brand.key}_category`)}</p>
          <p className={classes.text}>{t(`brands.${brand.key}`)}</p>
          <div className={classes.titleHolder}>
            <div className={classes.circle}>
              <StaticImage
                src="../../assets/logos/van-der-waal-logo.png"
                alt="van der waal logo"
                placeholder="blurred"
                className={classes.logo}
              />
            </div>
            <div>
              <a className={classes.title2} href={brand.website}>
                {brand.name}
              </a>
            </div>
          </div>
        </div>
        <div className={classes.imgContainer}>
          <StaticImage
            src="../../assets/websiteImages/van-der-waal-surf-grip.png"
            alt="van der waal surf grip"
            placeholder="blurred"
            className={classes.img}
          />
        </div>
        <Hidden smDown>
          <div className={classes.imgContainer2}>
            <StaticImage
              src="../../assets/websiteImages/van-der-waal-shortboard.jpg"
              alt="van der waal shortboard"
              placeholder="blurred"
              className={classes.img2}
            />
          </div>
        </Hidden>
      </div>
    </Container>
  )
}
