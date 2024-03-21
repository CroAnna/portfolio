# Portfolio

### How to start locally using Docker?

1. Clone the repository:

```
git clone https://github.com/CroAnna/portfolio.git
```

2. Navigate to it:

```
cd portfolio
```

3. Build Docker image:
   
```
docker build -t portfolio-ana .
```

4. Run the image:
```
docker run -p 5173:5173 portfolio-ana
```

5. Open the application in your web browser on `http://localhost:5173/`
