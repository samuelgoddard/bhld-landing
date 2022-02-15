export const fade = {
	initial: { opacity: 0 },
  enter: { 
    opacity: 1,
    transition: { duration: 1.2, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 1.2, ease: [0.83, 0, 0.17, 1] }
	}
}

export const reveal = {
	initial: { y: '150%' },
  enter: { 
    y: 0,
    transition: { duration: 0.8, delay: 0.12, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '150%',
		transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] }
	}
}