import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError()

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="mt-3">Something went wrong!</h1>
          <p>
            {error.statusText || error.message}
          </p>
        </div>
      </div>
    </div>
  )
}