export const headerVariants = {
  closed: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 9999,
    backgroundColor: 'transparent',
    width: '100%',
  },
  open: {
    position: 'fixed',
    top: '20px',
    zIndex: 9999,
  },
}

export const themeVariants = {
  toLeft: {
    left: 'calc(100% - 1.75rem)',
  },
  toRight: {
    left: 0,
  },
}

export const cardVariants = {
  closed: {
    opacity: 0,
    visibility: 'hidden',
    y: 20,
    height: 0,
    margin: 0,
  },
  open: {
    opacity: 1,
    visibility: 'visible',
    y: 0,
    height: 'fit-content',
  },
}

export const uslugeCardVariants = {
  closed: {
    flexGrow: 1,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 60,
    },
  },
  open: {
    flexGrow: 2.5,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
}

export const uslugeCardVariantsMobile = {
  closed: {
    flexGrow: 0.5,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 60,
    },
  },
  open: {
    flexGrow: 2.5,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
    },
  },
}
