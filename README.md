# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<script src='https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.1.4/Chart.bundle.min.js'></script>
<script>
    $(document).ready(function() {
        var ctx = $("#chart-line");
        var myLineChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: ["Spring", "Summer", "Fall", "Winter"],
                datasets: [{
                    data: [1200, 1700, 800, 200],
                    backgroundColor: ["rgba(255, 0, 0, 0.5)", "rgba(100, 255, 0, 0.5)", "rgba(200, 50, 255, 0.5)", "rgba(0, 100, 255, 0.5)"]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Weather'
                }
            }
        });
    });
</script>
<div class="page-content page-container" id="page-content">
    <div class="padding">
        <div class="row">
            <div class="container-fluid d-flex justify-content-center">
                <div class="col-sm-8 col-md-6">
                    <div class="card">
                        <div class="card-header">Pie chart</div>
                        <div class="card-body" style="height: 420px">
                            <div class="chartjs-size-monitor" style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;">
                                <div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                    <div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div>
                                </div>
                                <div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;">
                                    <div style="position:absolute;width:200%;height:200%;left:0; top:0"></div>
                                </div>
                            </div> <canvas id="chart-line" width="299" height="200" class="chartjs-render-monitor" style="display: block; width: 299px; height: 200px;"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

    <body>
      <!-- Start your project here-->
      <div class="container">
        <div class="d-flex justify-content-center row">
          <div class="col-md-12">
            <div id="polar-area-chart"></div>
          </div>
        </div>
      </div>
      <!-- End your project here-->

      <!-- MDB -->
      <script type="text/javascript" src="js/mdb.min.js"></script>
      <!-- Custom scripts -->

        <script type="text/javascript"></script>
        <script type="text/javascript">
          const dataBar = {
            type: "polarArea",
            data: {
              labels: ["Monday", "fsb", "khbkv", "bxcxfvx", "zvc", "zv", "davzx"],
              datasets: [{
                label: "Traffic",
                data: [123, 4322, 235, 545, 35, 23, 235],
                backgroundcolor: "['rgba(63,81,181,0.5)','rgba(63,81,181,0.5)','rgba(63,81,181,0.5)','rgba(63,81,181,0.5)','rgba(63,81,181,0.5)','rgba(63,81,181,0.5)','rgba(63,81,181,0.5)']",
              }]
            }
          }</script>






















































               <div class="col-md-12 ">
                    <div class="rcanva">

                        {/* <div class="circle forma list-group list-group-mine  ">
                            <a class="circle list-group-item" href="/path"><strong><a href="#">Edit profile</a></strong></a>
                            <a class="circle list-group-item" href="/path"><strong><a href="#">Edit profile</a></strong></a>
                        </div> */}
                         <ul class="forma nav nav-tabs">
                            <li class="circle nav-item">
                                <a class=" nav-link " href="#"><strong><a href="#">Favotited songs</a></strong></a>
                            </li>
                            <li class="circle nav-item">
                                <a class=" nav-link"  href="#"><strong><a href="#">Friends</a></strong></a>
                            </li>
                        </ul>
                        <div class="list-group list-group-mine">
                             {friends.map((items, index) => {
                                return (
                                         <a class="col-md-12 list-group-item" href="/{items}"><a href="#" class="col-md-9">{items}</a><button type="button" class="col-md-1 delete btn-close" aria-label="Close"></button></a>)  })}
                        </div>
                        {/* <Friends/>; */}

                    </div>
                </div>
            </div>
            <div class="leftside">
            {/* <h4 class="col-md-12 text-right complete"> </h4> */}
                <h4 class="col-md-7 fieldname">Music preferences</h4>

            </div>
            <div className="main">
                <div class="col-md-12 basic body">
                    <div class="medis lcanva">
                        <ul class="forma nav nav-tabs">
                            <li class=" nav-item">
                                <a class=" nav-link " href="#"><strong>Favorited genres</strong></a>
                            </li>
                        </ul>
                        <div class="list list-group list-group-mine">
                             {genre.map((items, index) => {
                                return (
                                         <a class="col-md-12 list-group-item" href="/{items}"><a href="#" class="col-md-9">{items}</a><button type="button" class="col-md-1 delete btn-close" aria-label="Close"></button></a>)  })}
                        </div>

                    </div>
                </div>
