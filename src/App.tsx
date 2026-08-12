import {
  Header,
  ScrollProgress,
  Hero,
  Services,
  WorkflowProof,
  VAFitChecker,
  ToolsGrid,
  ContactForm,
  Footer,
} from './components'

function App() {

  return (
    <div className="bg-dark-900 text-white">
      <Header />
      <ScrollProgress />
      <Hero />
      <Services />
      <WorkflowProof />
      <VAFitChecker />
      <ToolsGrid />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
