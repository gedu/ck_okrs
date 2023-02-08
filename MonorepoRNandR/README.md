
# 101 Nx Monorepo React/RN

A monorepo is a repository that contains multiple projects. In an Nx monorepo, you can have React Web and React Native projects that share common code and libraries.


## Learning React

 You can refer to the React project TODO: add link

## Learning React-Native

 You can refer to the React-Native project TODO: add link

## Nx 
Nx is a set of open-source tools for monorepo development, made by Nrwl. Nx allows you to create, manage, and build large-scale applications and libraries in a single repository.

A monorepo is a single repository that contains multiple projects. By using a monorepo, you can manage all your projects in a single place, making it easier to share code, collaborate with other developers, and streamline your development process.

*Install Nx globally:*
```
npm install -g @nrwl/cli
```

*Create a new Nx workspace:*
```
npx create-nx-workspace@latest myworkspacename
```

- Change into the workspace directory: `cd myworkspacename`

*Generate a new React Native app:*
```
nx g @nrwl/react-native:app my-react-native-app-name
```

Note: the `g` is from `generate`

*Generate a new React Web app:*
```
nx g @nrwl/react:app my-react-web-app-name
```

Now you have a monorepo with two React-Native and React Web apps that you can manage in a single workspace.

*Generate new ui-component:*
```
nx g @nrwl/react:lib ui-components --style=none
```

Note: `--style=none` don't create .css file

*Adding a component into the ui-components lib:*
```
nx g @nrwl/react:component activity-indicator --project=ui-components --export --style=none
```

Note: the `--export` is to add the component into the `index.ts` and export it so it can be use outside

*Remove lib:*
```
nx g remove ui-components
```

*Build and run the React Web app:*
```
nx serve app-name-web
```

*Build and run the React-Native Android:*
```
nx run-android app-name-rn
```

*Build and run the React-Native iOS:*
```
nx run-ios app-name-rn
```
