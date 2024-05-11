import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, IconButton, Image, Input, Link, SimpleGrid, Text, Textarea, VStack } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaReact, FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Header />
      <MainContent />
      <Footer />
    </Container>
  );
};

const Header = () => {
  return (
    <Flex as="header" width="full" align="center" justifyContent="space-between" p={4} bg="gray.100" position="fixed" top={0} left={0} right={0} zIndex={1}>
      <Heading as="h1" size="lg">
        John Doe
      </Heading>
      <Flex as="nav">
        <Link href="#about" p={2}>
          About Me
        </Link>
        <Link href="#skills" p={2}>
          Skills
        </Link>
        <Link href="#projects" p={2}>
          Projects
        </Link>
        <Link href="#contact" p={2}>
          Contact
        </Link>
      </Flex>
    </Flex>
  );
};

const MainContent = () => {
  return (
    <VStack spacing={8} mt="100px" align="stretch">
      <AboutMe />
      <Skills />
      <Projects />
      <ContactForm />
    </VStack>
  );
};

const AboutMe = () => {
  return (
    <Box id="about" p={5} shadow="md" borderWidth="1px">
      <Heading mb={2}>About Me</Heading>
      <Flex align="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTU0NDQyMDh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="John Doe" mr={4} />
        <Text fontSize="md">Experienced React Developer with a passion for building scalable web applications and working on challenging projects.</Text>
      </Flex>
    </Box>
  );
};

const Skills = () => {
  return (
    <Box id="skills" p={5} shadow="md" borderWidth="1px">
      <Heading mb={2}>Skills</Heading>
      <SimpleGrid columns={3} spacing={3}>
        <SkillCard icon={FaReact} title="React" />
        <SkillCard icon={FaRocket} title="JavaScript" />
        <SkillCard icon={FaRocket} title="TypeScript" />
      </SimpleGrid>
    </Box>
  );
};

const SkillCard = ({ icon, title }) => {
  const IconComponent = icon;
  return (
    <VStack>
      <IconButton aria-label={title} icon={<IconComponent size="24" />} isRound={true} />
      <Text>{title}</Text>
    </VStack>
  );
};

const Projects = () => {
  return (
    <Box id="projects" p={5} shadow="md" borderWidth="1px">
      <Heading mb={2}>Projects</Heading>
      <SimpleGrid columns={2} spacing={3}>
        <ProjectCard title="Project 1" description="A React app with custom hooks." />
        <ProjectCard title="Project 2" description="A complex frontend with Redux and TypeScript." />
      </SimpleGrid>
    </Box>
  );
};

const ProjectCard = ({ title, description }) => {
  return (
    <Box p={5} shadow="sm" borderWidth="1px">
      <Heading size="md" mb={2}>
        {title}
      </Heading>
      <Text mb={2}>{description}</Text>
      <Button colorScheme="blue">Learn More</Button>
    </Box>
  );
};

const ContactForm = () => {
  return (
    <Box id="contact" p={5} shadow="md" borderWidth="1px">
      <Heading mb={2}>Contact Me</Heading>
      <FormControl>
        <FormLabel>Name</FormLabel>
        <Input type="text" />
        <FormLabel mt={4}>Email</FormLabel>
        <Input type="email" />
        <FormLabel mt={4}>Message</FormLabel>
        <Textarea />
        <Button mt={4} colorScheme="blue">
          Send
        </Button>
      </FormControl>
    </Box>
  );
};

const Footer = () => {
  return (
    <Flex as="footer" align="center" justifyContent="center" p={4} bg="gray.100">
      <Link href="https://github.com" isExternal>
        <FaGithub />
      </Link>
      <Link href="https://linkedin.com" isExternal ml={2}>
        <FaLinkedin />
      </Link>
    </Flex>
  );
};

export default Index;
