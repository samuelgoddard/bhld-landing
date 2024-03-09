export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] }
	}
}

export const fadeDelay = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.6, delay: 0.4, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] }
	}
}

export const fadeBg = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] }
	}
}

export const reveal = {
	initial: { y: '150%' },
  enter: { 
    y: 0,
    transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '150%',
		transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] }
	}
}

export const revealDelay = {
	initial: { y: '150%' },
  enter: { 
    y: 0,
    transition: { duration: 0.6, delay: 0.25, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '150%',
		transition: { duration: 0.6, ease: [0.83, 0, 0.17, 1] }
	}
}