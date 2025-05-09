import React from 'react'
import TodoList from '../components/TodoList'

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-semibold text-blue-600">Home</h1>
        </div>
      </header>
      <main className="py-8">
        <div className="container mx-auto max-w-xl bg-white rounded-lg shadow-md p-8">
          <TodoList />
        </div>
      </main>
    </div>
  )
}

export default Home