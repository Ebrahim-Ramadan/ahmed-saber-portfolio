# Installing `dlib` on Raspberry Pi 5 with Python 3 using terminal

In this guide, we'll walk through the steps to install the `dlib` library on a Raspberry Pi 5 using Python 3 (compatible with Raspbian OS or ubunto versions from 18 to 23). This includes installing the necessary build tools, Python dependencies, compiling `dlib` from source, and setting up virtual environments for Python.

## Step 1: Install Required Build Tools for Ubuntu

**Install the required build tools and libraries:**

```bash
sudo apt-get install build-essential cmake pkg-config libx11-dev libatlas-base-dev libgtk-3-dev libboost-python-dev
```

## Step 2: Install python3 dependencies

**Install the Python 3 development tools and pip:**

```bash
sudo apt-get install python3-dev python3-pip
```

**Upgrade pip and install numpy:**

```bash
sudo -H pip3 install -U pip numpy
```

## Step 3: Compile `dlib` from source.

**Download the `dlib` source code:**

```bash
wget http://dlib.net/files/dlib-19.9.tar.bz2
```

**Extract the tarball:**

```bash
tar xvf dlib-19.9.tar.bz2
```

**Navigate to the extracted directory:**

```bash
cd dlib-19.9/
```

**Create the build directory:**

```bash
mkdir build
```

**Enter the build directory:**

```bash
cd build
```

**Configure the build using CMake:**

```bash
cmake ..
```

**Build `dlib`:**

```bash
cmake --build . --config Release
```

**Install `dlib`:**

```bash
sudo make install
```

**Update the shared library cache:**

```bash
sudo ldconfig
```

```bash
cd ..
```

**Verify the installation:**

```bash
pkg-config --libs --cflags dlib-1
```

## Step 4: Install virtual environment

Virtual environments in python is a great way to maintain different settings for each project. This way one can avoid package conflicts.

**Install `virtualenv` and `virtualenvwrapper` for Python 3:**

```bash
sudo pip3 install virtualenv virtualenvwrapper
```

**Update .bashrc to include virtual environment commands:**

```bash
echo "# Python's Virtual Environment Wrapper" >> ~/.bashrc
```

```bash
echo "source /usr/local/bin/virtualenvwrapper.sh" >> ~/.bashrc
```

```bash
source ~/.bashrc
```

## Step 5: installing the `dlib` library

**Create a virtual environment (e.g., named "Saber"):**

```bash
mkvirtualenv Saber -p python3
```

```bash
workon Saber
```

**Install necessary Python libraries within this virtual environment:**

```bash
pip install numpy scipy matplotlib scikit-image scikit-learn ipython
```

**if you want to install `dlib` from pip**

```bash
pip install dlib
```

**Alternatively, if you compiled `dlib` from source, move to the dlib root directory:**

```bash
cd dlib-19.9
```

```bash
python setup.py install
```

`quit virtual environment`

```bash
deactivate
```

When attempting to install Python packages using `pip`, you might encounter this <font color="rgb(0, 255, 0)">error</font> `externally-managed-environment`. To resolve this, follow this [link](https://ahmed-saber.vercel.app/blogs/externally-managed-env)

<font color="rgb(255, 0, 0)">
  **Congratulations! your Python Dlib library is successfully installed.**
</font>{" "}