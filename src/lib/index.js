export const navbarDown = {
  hidden: {
    y:"-100%"
  },
  show: {
    y:0,
    transition: {
      ease:"easeInOut"
    }
  },
  exit: {
    y:"-100%",
    transition: {
      ease:"easeInOut",
      delay:0.5,
    }
  }
}

export const navbarList = {
  hidden: {
  },
  show: {
    transition: {
      staggerChildren:0.1,
      ease:"easeInOut",
    }
  },
  exit: {
    transition: {
      staggerChildren:0.05,
      ease:"easeInOut",
    }
  }
}

export const navbarListStagger = {
  hidden: {
    y:"-100%",
    opacity:0,
  },
  show: {
    y:0,
    opacity:1,
  },
  exit: {
    y:"-100%",
    opacity:0,
  }
}