import React from 'react'

export  function Index() {
  return (
    <div className="container py-4" id="home">
    <div className="bg-body-tertiary p-5 rounded">
        <div className="col-sm-8 py-5 mx-auto">
            <h1 className="display-5 fw-normal">Welcome to Band-View Application</h1>
            <p className="fs-5">
               This is where you get to generate a list of some of the Greatest bands in the world!
            </p>
            <p>
                Hope you have as much fun using it as we had creating it! Created by: Ndawula A Mudde
            </p>
            <p>
                <a className="btn btn-primary" href="https://appmusicwebapinet8.azurewebsites.net/swagger/index.html" role="button">AppMusic WebApi</a>
            </p>
        </div>
    </div>
</div>
  )
}
