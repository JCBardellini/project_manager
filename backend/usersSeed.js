const User = require("./models/User.js")

require("./config/db.js")

const users = [
  {
    name: "John Doe",
    email: "john@example.com",
    isAdmin: true,
    jobTitle: "Software Engineer",
    department: "Engineering",
    location: "San Francisco",
    bio: "Passionate software engineer with a focus on web development. Experienced with JavaScript, React, and Node.js.",
  },
  {
    name: "Alice Smith",
    email: "alice@example.com",
    isAdmin: false,
    jobTitle: "UX Designer",
    department: "Design",
    location: "New York",
    bio: "Creative UX designer with a love for crafting beautiful and user-friendly interfaces.",
  },
  {
    name: "Robert Johnson",
    email: "robert@example.com",
    isAdmin: false,
    jobTitle: "Data Scientist",
    department: "Data Science",
    location: "Chicago",
    bio: "Data scientist specializing in machine learning and data analysis. Excited about uncovering insights from data.",
  },
  {
    name: "Emily Brown",
    email: "emily@example.com",
    isAdmin: false,
    jobTitle: "Marketing Manager",
    department: "Marketing",
    location: "Los Angeles",
    bio: "Marketing manager with a track record of successful campaigns and a passion for brand growth.",
  },
  {
    name: "Michael Wilson",
    email: "michael@example.com",
    isAdmin: false,
    jobTitle: "Product Manager",
    department: "Product Management",
    location: "Seattle",
    bio: "Product manager with experience in product development and strategy.",
  },
  {
    name: "Samantha Harris",
    email: "samantha@example.com",
    isAdmin: false,
    jobTitle: "Graphic Designer",
    department: "Design",
    location: "Chicago",
    bio: "Graphic designer with a flair for creative and visually appealing designs.",
  },
  {
    name: "David Martinez",
    email: "david@example.com",
    isAdmin: false,
    jobTitle: "Frontend Developer",
    department: "Engineering",
    location: "New York",
    bio: "Frontend developer passionate about creating responsive and user-friendly web applications.",
  },
  {
    name: "Olivia Johnson",
    email: "olivia@example.com",
    isAdmin: false,
    jobTitle: "Content Writer",
    department: "Marketing",
    location: "Los Angeles",
    bio: "Content writer with a love for storytelling and creating engaging content.",
  },
  {
    name: "William Taylor",
    email: "william@example.com",
    isAdmin: false,
    jobTitle: "Data Analyst",
    department: "Data Science",
    location: "San Francisco",
    bio: "Data analyst with a focus on data visualization and reporting.",
  },
  {
    name: "Ella Anderson",
    email: "ella@example.com",
    isAdmin: false,
    jobTitle: "HR Specialist",
    department: "Human Resources",
    location: "Chicago",
    bio: "HR specialist with experience in recruitment and employee relations.",
  },
  {
    name: "James Davis",
    email: "james@example.com",
    isAdmin: false,
    jobTitle: "Backend Developer",
    department: "Engineering",
    location: "San Francisco",
    bio: "Backend developer experienced in building robust and scalable server-side applications.",
  },
  {
    name: "Ava Brown",
    email: "ava@example.com",
    isAdmin: false,
    jobTitle: "UX Researcher",
    department: "Design",
    location: "New York",
    bio: "UX researcher dedicated to understanding user behavior and improving product usability.",
  },
  {
    name: "Liam Wilson",
    email: "liam@example.com",
    isAdmin: false,
    jobTitle: "Network Engineer",
    department: "IT",
    location: "Los Angeles",
    bio: "Network engineer specializing in building and maintaining robust network infrastructures.",
  },
  {
    name: "Sophia Jones",
    email: "sophia@example.com",
    isAdmin: false,
    jobTitle: "Content Strategist",
    department: "Marketing",
    location: "Chicago",
    bio: "Content strategist with a focus on creating effective content strategies for brands.",
  },
  {
    name: "Mason Davis",
    email: "mason@example.com",
    isAdmin: false,
    jobTitle: "Database Administrator",
    department: "IT",
    location: "San Francisco",
    bio: "Database administrator experienced in managing and optimizing database systems.",
  },
  {
    name: "Harper Garcia",
    email: "harper@example.com",
    isAdmin: false,
    jobTitle: "Digital Marketing Manager",
    department: "Marketing",
    location: "New York",
    bio: "Digital marketing manager with expertise in online marketing campaigns and strategies.",
  },
  {
    name: "Logan Wilson",
    email: "logan@example.com",
    isAdmin: false,
    jobTitle: "DevOps Engineer",
    department: "Engineering",
    location: "Los Angeles",
    bio: "DevOps engineer focused on automation, continuous integration, and deployment.",
  },
  {
    name: "Aria Robinson",
    email: "aria@example.com",
    isAdmin: false,
    jobTitle: "UI Designer",
    department: "Design",
    location: "Chicago",
    bio: "UI designer passionate about creating intuitive and visually appealing user interfaces.",
  },
  {
    name: "Henry Hall",
    email: "henry@example.com",
    isAdmin: false,
    jobTitle: "Business Analyst",
    department: "Business Development",
    location: "San Francisco",
    bio: "Business analyst specializing in analyzing data and making data-driven decisions.",
  },
  {
    name: "Ava Davis",
    email: "ava@example.com",
    isAdmin: false,
    jobTitle: "Mobile App Developer",
    department: "Engineering",
    location: "New York",
    bio: "Mobile app developer with experience in building iOS and Android applications.",
  },
];

const insert = async () => {
    await User.deleteMany();
    await User.insertMany(users);
}
insert();



