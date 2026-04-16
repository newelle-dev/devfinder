import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import Button from '../ui/Button';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  handleRestart = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-[400px] p-8 text-center space-y-6">
          <div className="rounded-full bg-destructive/10 p-6">
            <AlertTriangle className="h-12 w-12 text-destructive" />
          </div>
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Something went wrong</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              An unexpected error occurred. We've been notified and are working on a fix.
            </p>
          </div>
          {import.meta.env.DEV && (
            <div className="bg-muted p-4 rounded-md text-left w-full max-w-2xl overflow-auto border border-border">
              <p className="font-mono text-sm text-destructive">{this.state.error?.toString()}</p>
            </div>
          )}
          <Button 
            onClick={this.handleRestart}
            icon={<RefreshCw className="h-4 w-4" />}
            className="mt-4"
          >
            Go back to home
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
