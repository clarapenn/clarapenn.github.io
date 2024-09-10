import {defineConfig} from "vite"

export default defineConfig({
	build: {
		outDir: 'dist', // Change this to your desired output directory
		assetsDir: '', // Set this to an empty string or your desired assets directory
		rollupOptions: {
		input: {
			main: './index.html', // Specify the main HTML file
			project1: './project-1.html',
			project2: './project-2.html',
			project3: './project-3.html',
		  },
		},
	  },
	  plugins: [

	]
})