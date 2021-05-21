export default theme => ({
  content_wrap: {
    ...theme.templates.page_wrap,
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gridColumnGap: '0px',
    padding: '0px',
    height: '100vh',
    backgroundColor: '#1c1c1c',
    color: '#ffffff',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr 1fr'
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr'
    }
  },
  overflow_scroll: {
    overflowY: 'scroll',
    flexGrow: 1
  },
  left_pane: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  sticky_card: {
    position: 'sticky',
    top: '0px',
    height: '100vh'
  },
  sticky_card_content: {
    height: '100%',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: '0px !important'
  },
  content_frame: {
    display: 'grid',
    height: '100%'
  },
  full_height: {
    height: '100%'
  },
  center_grid: {
    display: 'grid',
    placeItems: 'center',
    height: '100vh',
    width: '100%'
  },
  convo_logo: {
    width: '50%'
  }
})
