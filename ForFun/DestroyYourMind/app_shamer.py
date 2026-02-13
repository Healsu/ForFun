import os         # For checking if folders exist
import tkinter as tk  # For pop-up windows
from tkinter import messagebox  # For simple message boxes
import getpass    # To get username for the text file



#Lets find that gay ass app and shame the user for it. League is a good goto
app_name = "League of Legends"
install_paths = [
    f"C:\\Riot Games\\League of Legends", #Normal path people usually use
    f"C:\\Program Files\\League of Legends",
    f"C:\\Program Files (x86)\\League of Legends"
]

def is_installed():
    for path in install_paths:
        if os.path.exists(path):
            print("We found it")
            return True
    return False


def write_loser_file():
    user = getpass.getuser()  # Get your Windows username
    desktop_path = os.path.join(os.path.expanduser("~"), "Desktop")
    file_path = os.path.join(desktop_path, "loser.txt")
    with open(file_path, "w") as f:
        f.write(f"{user}, you play {app_name}? LOSER!\n")
    return file_path


#---------------------------------------------------------------------

root = tk.Tk()
root.withdraw()  # Hides the main window

if is_installed():
    file_path = write_loser_file()
    messagebox.showinfo("App Shamer", f"Detected {app_name}! File created:\n{file_path}")
else:
    messagebox.showinfo("App Shamer", f"{app_name} not found. You’re a responsible human!")
