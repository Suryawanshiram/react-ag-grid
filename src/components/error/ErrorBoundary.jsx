import React from "react";

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("UI Error:", error, info);
  }

  resetError = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="p-6 text-center">
            <h2 className="text-lg font-semibold text-red-500">
              Something went wrong
            </h2>
            <p className="text-sm text-gray-400 mb-3">
              Please refresh or try again.
            </p>
            <button
              onClick={this.resetError}
              className="px-3 py-1 text-sm rounded bg-gray-100 hover:bg-gray-200"
            >
              Retry
            </button>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
