<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HarshSpark - Real-time Messaging App</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <style>
        body {
            font-family: 'Arial', sans-serif;
        }
        .section-title {
            font-size: 2rem;
            font-weight: bold;
            color: #4A90E2;
        }
        .subsection-title {
            font-size: 1.5rem;
            font-weight: bold;
            color: #333;
        }
        .feature-card {
            transition: transform 0.3s ease;
        }
        .feature-card:hover {
            transform: translateY(-10px);
        }
        .feature-list {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 1.5rem;
        }
    </style>
</head>
<body class="bg-gray-100">

    <!-- Header Section -->
    <header class="bg-blue-600 text-white p-6">
        <div class="container mx-auto text-center">
            <h1 class="text-4xl font-bold mb-4">HarshSpark</h1>
            <p class="text-lg mb-4">Engaging real-time messaging platform built with the MERN stack.</p>
            <a href="#demo" class="bg-yellow-400 text-black px-6 py-2 rounded-lg text-xl">Explore the Live Demo</a>
        </div>
    </header>

    <!-- Features Section -->
    <section class="py-16">
        <div class="container mx-auto text-center">
            <h2 class="section-title mb-8">🌟 User Experience and Features</h2>
            <div class="feature-list">
                <!-- Feature 1 -->
                <div class="feature-card bg-white shadow-lg rounded-lg p-6">
                    <h3 class="subsection-title">Real-Time Messaging</h3>
                    <p>Instant communication with Socket.io for seamless and immediate exchanges between users.</p>
                </div>
                <!-- Feature 2 -->
                <div class="feature-card bg-white shadow-lg rounded-lg p-6">
                    <h3 class="subsection-title">Profile Management</h3>
                    <p>Users can create, update, and manage their profiles with display pictures and custom usernames.</p>
                </div>
                <!-- Feature 3 -->
                <div class="feature-card bg-white shadow-lg rounded-lg p-6">
                    <h3 class="subsection-title">Typing Indicators</h3>
                    <p>See when others are typing a message in real time to keep the conversation flowing smoothly.</p>
                </div>
                <!-- Feature 4 -->
                <div class="feature-card bg-white shadow-lg rounded-lg p-6">
                    <h3 class="subsection-title">Online Status</h3>
                    <p>Know who’s online or offline with real-time updates, improving the overall user experience.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Demo Section -->
    <section id="demo" class="bg-gray-200 py-16">
        <div class="container mx-auto text-center">
            <h2 class="section-title mb-8">🚀 Demo</h2>
            <p class="text-lg mb-4">Explore the live demo of HarshSpark to experience the real-time messaging in action.</p>
            <a href="https://your-live-demo-link" target="_blank" class="bg-yellow-400 text-black px-6 py-2 rounded-lg text-xl">Try it Now</a>
        </div>
    </section>

    <!-- Built With Section -->
    <section class="py-16">
        <div class="container mx-auto text-center">
            <h2 class="section-title mb-8">💻 Built with</h2>
            <p class="text-lg mb-4">Technologies used in the project:</p>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div class="tech-card bg-white p-6 shadow-lg rounded-lg">
                    <h3 class="text-xl font-bold">Frontend</h3>
                    <p>React.js, Tailwind CSS, React Redux</p>
                </div>
                <div class="tech-card bg-white p-6 shadow-lg rounded-lg">
                    <h3 class="text-xl font-bold">Backend</h3>
                    <p>Node.js, Express.js, Socket.io</p>
                </div>
                <div class="tech-card bg-white p-6 shadow-lg rounded-lg">
                    <h3 class="text-xl font-bold">Database</h3>
                    <p>MongoDB</p>
                </div>
                <div class="tech-card bg-white p-6 shadow-lg rounded-lg">
                    <h3 class="text-xl font-bold">Authentication</h3>
                    <p>JWT</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer class="bg-blue-600 text-white py-6">
        <div class="container mx-auto text-center">
            <p>&copy; 2024 HarshSpark | All Rights Reserved</p>
        </div>
    </footer>

</body>
</html>
