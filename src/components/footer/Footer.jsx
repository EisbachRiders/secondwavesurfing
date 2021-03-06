import React, { Fragment } from "react"
import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby-theme-material-ui"
import clsx from "clsx"
import { makeStyles } from "@material-ui/styles"
import IconButton from "@material-ui/core/IconButton"
import Hidden from "@material-ui/core/Hidden"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import PinterestIcon from "@material-ui/icons/Pinterest"
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer"
import ReplyIcon from "@material-ui/icons/Reply"
import LocalShippingIcon from "@material-ui/icons/LocalShipping"
import Newsletter from "../newsletter/Newsletter"
import Container from "../ui/Container"
import Contact from "../Contact"
import BottomFooter from "./BottomFooter"
import visa from "../../assets/logos/visa.svg"
import amex from "../../assets/logos/american-express.svg"
import amazonpay from "../../assets/logos/amazonpay.png"
import mastercard from "../../assets/logos/mastercard.svg"
import banktransfer from "../../assets/logos/bank-transfer.svg"
import paypal from "../../assets/logos/paypal.svg"

const useStyles = makeStyles((theme) => ({
  footer: {
    background: theme.color.white,
  },
  container: {
    justifyContent: "center",
    flexWrap: "nowrap",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "space-between",
    },
  },
  title: {
    textTransform: "capitalize",
    fontSize: 16,
    letterSpacing: 3,
    marginBottom: 15,
    [theme.breakpoints.up("md")]: {
      fontSize: 24,
    },
  },
  text: {
    textTransform: "capitalize",
    color: theme.color.black,
    letterSpacing: 2,
    marginBottom: 15,
    fontSize: 12,
    [theme.breakpoints.up("md")]: {
      fontSize: 16,
    },
  },
  link: {
    "&:hover": {
      textDecoration: "none",
      color: theme.palette.primary.main,
    },
  },
  img: {
    width: 50,
    marginBottom: 30,
    [theme.breakpoints.up("md")]: {
      width: 150,
    },
  },
  linksContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    [theme.breakpoints.up("md")]: {
      flexWrap: "nowrap",
    },
  },
  list: {
    flexBasis: "42%",
    display: "flex",
    flexDirection: "column",
    margin: "0 15px",
    [theme.breakpoints.up("md")]: {
      flexBasis: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "0 45px",
    },
  },
  imgContainer: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      height: "100%",
    },
  },
  socialContainer: {
    display: "flex",
    justifyContent: "space-around",
  },
  iconSocial: {
    color: theme.color.black,
    width: 22,
    height: 22,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  iconContainer: {
    display: "flex",
    flexBasis: "100%",
    [theme.breakpoints.up("sm")]: {
      flexBasis: "30%",
    },
    [theme.breakpoints.up("sm")]: {
      flexBasis: "25%",
      justifyContent: "space-around",
    },
  },
  icon: {
    width: 32,
    height: 32,
    marginRight: 30,
    [theme.breakpoints.up("sm")]: {
      width: 24,
      height: 24,
    },
    [theme.breakpoints.up("md")]: {
      width: 32,
      height: 32,
    },
    [theme.breakpoints.up("lg")]: {
      marginRight: 30,
      width: 42,
      height: 42,
    },
  },
  feature: {
    fontSize: 16,
    letterSpacing: 3,
    marginTop: 0,
    marginBottom: 5,
    [theme.breakpoints.up("sm")]: {
      fontSize: 13,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 22,
    },
  },
  featureText: {
    marginTop: 0,
    color: theme.color.textLight,
    fontSize: 14,
    [theme.breakpoints.up("sm")]: {
      fontSize: 12,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 12,
    },
  },
  paymentsContainer: {
    display: "flex",
  },
  paymentImg: {
    height: 32,
    marginRight: 15,
  },
}))

function Footer() {
  const classes = useStyles()
  const { t } = useTranslation()
  const blog = ["lifestyle", "travel", "gear", "community"]
  const shop = [
    "rapid-surfing",
    "fins",
    "sup",
    "leashes",
    "accessories",
    "apparel",
  ]
  const customerService = ["faq", "contact", "shipping", "returns"]
  const features = [
    {
      title: "emailSupport",
      icon: <QuestionAnswerIcon className={classes.icon} />,
    },
    {
      title: "30dayReturns",
      icon: <ReplyIcon className={classes.icon} />,
    },
    {
      title: "freeShipping",
      icon: <LocalShippingIcon className={classes.icon} />,
    },
  ]
  return (
    <footer className={classes.footer}>
      {process.env.NODE_ENV === "development" && (
        <Container justifyContent="spaceAround">
          {features.map((elem, idx) => (
            <div className={classes.iconContainer} key={`feature${idx}`}>
              {elem.icon}
              <div>
                <p className={classes.feature}>{t(`footer.${elem.title}`)}</p>
                <p className={classes.featureText}>
                  {t(`footer.${elem.title}Text`)}
                </p>
              </div>
            </div>
          ))}
        </Container>
      )}

      <Newsletter />

      <Container alignItems="flexStart" className={classes.container}>
        <div className={classes.imgContainer}>
          <StaticImage
            src="../../assets/logos/logo.png"
            alt="logo"
            className={classes.img}
          />
          <div className={classes.socialContainer}>
            <IconButton
              href="https://www.facebook.com/secondwavesurfing"
              aria-label="facebook"
              size="small"
              rel="noopener"
              target="_blank"
            >
              <FacebookIcon className={classes.iconSocial} />
            </IconButton>
            <IconButton
              href="https://www.instagram.com/second_wave_surfing/"
              aria-label="instagram"
              size="small"
              rel="noopener"
              target="_blank"
            >
              <InstagramIcon className={classes.iconSocial} />
            </IconButton>
            <IconButton
              href="https://www.pinterest.com/eisbachriders/"
              aria-label="pinterest"
              size="small"
              rel="noopener"
              target="_blank"
            >
              <PinterestIcon className={classes.iconSocial} />
            </IconButton>
          </div>
        </div>
        <Hidden xsDown>
          <div className={classes.linksContainer}>
            <div className={classes.list}>
              <p className={classes.title}>{t("links.about")}</p>
              <Link to={`/brands`} className={clsx(classes.text, classes.link)}>
                {t(`links.brands`)}
              </Link>
            </div>
            <div className={classes.list}>
              <p className={classes.title}>{t("links.blog")}</p>
              {blog.map((elem, idx) => (
                <Link
                  key={`blog${idx}`}
                  to={`/tags/${elem}`}
                  className={clsx(classes.text, classes.link)}
                >
                  {t(`links.${elem}`)}
                </Link>
              ))}
            </div>
            <div className={classes.list}>
              <p className={classes.title}>{t("links.shop")}</p>
              {shop.map((elem, idx) => (
                <Link
                  key={`shop${idx}`}
                  href={`https://secondwavesurfing.com/shop/product-category/${elem}`}
                  className={clsx(classes.text, classes.link)}
                >
                  {t(`links.${elem}`)}
                </Link>
              ))}
            </div>
            <div className={classes.list}>
              <p className={classes.title}>{t("links.customerService")}</p>
              {customerService.map((elem, idx) => (
                <Fragment key={`customerService${idx}`}>
                  {elem === "contact" ? (
                    <Contact variant="link" />
                  ) : (
                    <Link
                      to={`/${elem}`}
                      className={clsx(classes.text, classes.link)}
                    >
                      {t(`links.${elem}`)}
                    </Link>
                  )}
                </Fragment>
              ))}
              <div className={classes.paymentsContainer}>
                <img src={paypal} alt="paypal" className={classes.paymentImg} />
                <img
                  src={amazonpay}
                  alt="amazonpay"
                  className={classes.paymentImg}
                />
                <img
                  src={banktransfer}
                  alt="banktransfer"
                  className={classes.paymentImg}
                />
              </div>
              <div className={classes.paymentsContainer}>
                <img src={visa} alt="visa" className={classes.paymentImg} />
                <img
                  src={mastercard}
                  alt="mastercard"
                  className={classes.paymentImg}
                />
                <img src={amex} alt="amex" className={classes.paymentImg} />
              </div>
            </div>
          </div>
        </Hidden>
      </Container>

      <BottomFooter />
    </footer>
  )
}

export default Footer
