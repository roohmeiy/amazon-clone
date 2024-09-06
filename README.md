# Amazon Clone Website

This project is a clone of the Amazon website, designed for educational purposes.

## Installation and Setup

Follow these steps to install and set up the Amazon clone website using Nginx on an Ubuntu server.
1.  Update your system install and start Nginx:
   ```bash
   sudo apt update
   sudo apt install nginx
  sudo systemctl start nginx
```

2. Move the project files to the web server directory:
```bash
sudo mv /path to/amazon-clone /var/www/
```

3. Configure Nginx to serve the website:
  ```bash
   sudo vi /etc/nginx/sites-available/default
   ```
   Update the root directive in the server block:
   
   ```bash
   root /var/www/amazon-clone;
   ```

4. Test the Nginx configuration:
  ```bash
  sudo nginx -t
  ```

5. If the test is successful, reload Nginx to apply the changes:
  ```bash
sudo systemctl reload nginx
```
6. Access the Project once the setup is complete, you should be able to access the Amazon Clone project by navigating to your server's IP address in a web browser.
   ```bash
   http://localhost:80
   ```


