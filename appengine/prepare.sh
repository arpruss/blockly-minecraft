mkdir static
cp ../*_*compr*.js static
rsync -a ../{core,generators,media,tests,demos} static
