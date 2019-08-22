# Cook CLI
Remote CLI for the Cook 3D Model/Geometry/Texture Processing Server.

### Important

This is alpha software under active development. Breaking changes can happen anytime, without prior notice.
You are welcome to experiment with the software, but please understand that we can't provide support at this time.

For questions, issues and bug reports, please open an issue on Github. 

### Getting Started

This repository contains a small Node.js project providing a command line interface to remote control
a Cook processing server.

##### Prerequisites
- Git
- Node.js


First, clone the repository to a location of your choice:

```bash
git clone https://github.com/Smithsonian/dpo-cook-cli
```

Next, install the dependencies and build the application. The last command, `npm link` adds a shortcut
`cook` to the user's path.

```bash
npm install
npm run build
npm link
```

Test the successful installation. Type the following command, and you should see the usage instructions.

```bash
cook help
```

### Usage

```
cook <command> [args] [parameters]

commands:
  machine [address]        set or get machine address
  client [id]              set or get client id
  create jobId recipeId    create job with given recipe name and assign given job id, then upload files
                           append recipe-specific parameters: --param=value, example: --highPolyMeshFile=mesh.obj
  run jobId [recipeId]     create and run job with given recipe name and assign given job id
  fetch jobId [--wait]     if the wait flag is set, waits for job completion, then downloads all result files
  cancel jobId             cancel job with given id
  delete jobId             delete job with given id
  status [jobId]           get job or machine status
  recipes                  list available recipes
  recipe [recipeId]        list recipe details
  help                     print this message

```