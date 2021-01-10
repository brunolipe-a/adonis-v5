import * as React from 'react'
import { HTMLMotionProps, motion } from 'framer-motion'

const PageTransition = (props: HTMLMotionProps<'div'>) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} {...props} />
)

export default PageTransition
