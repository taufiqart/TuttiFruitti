using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Runtime.InteropServices;
using System.Timers;
using System.Threading;
using TuttiFruitti.Properties;
using System.Drawing.Imaging;
using System.Resources;
using System.IO;
using System.Data.SqlClient;

namespace TuttiFruitti.GUI
{
    public partial class Menu : Form
    {
        
        System.Timers.Timer timer;
        int h, m, s, ms;

        

        

        public Menu()
        {
            InitializeComponent();

            scroll.Value = panelscrol.VerticalScroll.Value; 
            scroll.Minimum = panelscrol.VerticalScroll.Minimum;
            scroll.Minimum = panelscrol.VerticalScroll.Minimum;

            
           
        }

        private void panelscrol_ControlRemoved(object sender, ControlEventArgs e)
        {
            throw new NotImplementedException();
        }

        private void panelscrol_ControlAdded(object sender, ControlEventArgs e)
        {
            throw new NotImplementedException();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Dispose();
        }

        private void Menu_Load(object sender, EventArgs e)
        {
            timer = new System.Timers.Timer();
            timer.Interval = 1;
            timer.Elapsed += OntimeEvent;

        }

        private void t_Tick(object sender, EventArgs e)
        {
            //this will perform a flashlight effect

            
        }

        private void guna2Panel2_Paint(object sender, PaintEventArgs e)
        {
            
        }

        private void guna2CheckBox1_CheckedChanged(object sender, EventArgs e)
        {

        }

        private void button1_Click_1(object sender, EventArgs e)
        {
            this.Close();

        }

        private void guna2Button7_Click(object sender, EventArgs e)
        {

        }

        private void guna2PictureBox2_Click(object sender, EventArgs e)
        {

        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }

        private void guna2Button3_Click(object sender, EventArgs e)
        {

        }

            bool play = true;
        private SqlConnection con;
        private SqlConnection kon;

        private void guna2Button5_Click(object sender, EventArgs e)
        {
            timer.Enabled = true;



            //switch the BUTTON ON/OFF
            if (play)
            {

                //on
                play = !play;
                timer.Start();
                this.guna2Buttontimer.BackgroundImage = Properties.Resources.pause;
                play = false;

            } 
            else 
            {
                //off
                play = !play;
                timer.Stop();
                this.guna2Buttontimer.BackgroundImage = Properties.Resources.play__1_;
                play = true;

                
            }

        }

        private void timer1_Tick(object sender, EventArgs e)
        {
           
                
        }

        private void guna2Button4_Click(object sender, EventArgs e)
        {
            Add add= new Add();
            add.Show();
        }

        private void labeltimer_Click(object sender, EventArgs e)
        {

        }

        private void guna2TextBox4_TextChanged(object sender, EventArgs e)
        {

        }

        private void guna2Panel4_Paint(object sender, PaintEventArgs e)
        {

        }

        private void guna2VScrollBar1_Scroll(object sender, ScrollEventArgs e)
        {
            panelscrol.VerticalScroll.Value = scroll.Value;

        }

        private void guna2Button1_Click(object sender, EventArgs e)
        {
            create_project cm = new create_project();
            cm.Show();
        }

        private void guna2Button6_Click(object sender, EventArgs e)
        {

        }

        

        private void guna2Button2_Click(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            

        }

        private void timer1_Tick_1(object sender, EventArgs e)
        {
            timer1.Start();

            Bitmap bitmap = new Bitmap(Screen.PrimaryScreen.Bounds.Width, Screen.PrimaryScreen.Bounds.Width);
            Graphics g = Graphics.FromImage(bitmap);
            g.CopyFromScreen(0, 0, 0, 0, bitmap.Size);
            pictureBox1.Image = bitmap;

            MemoryStream ms = new MemoryStream();
            pictureBox1.Image.Save(ms, ImageFormat.Png);
            byte[] photo = new byte[ms.Length];
            ms.Position = 0;
            ms.Read(photo, 0,photo.Length);

            SqlCommand cmd = new SqlCommand("Insert into gambar (img) VALUES(@poto);", kon);
            cmd.Parameters.AddWithValue("@poto", photo);
            cmd.CommandType = CommandType.Text;
            kon.Open();
            cmd.ExecuteNonQuery();
            kon.Close();


        }

        private void guna2PictureBox2_Click_1(object sender, EventArgs e)
        {
            

        }

        private void guna2Panel1_Paint(object sender, PaintEventArgs e)
        {
            

        }

        private void OntimeEvent(object sender, ElapsedEventArgs e)
        {
            Invoke(new Action(() => {

                ms += 1;
                if(ms == 100)
                {
                    ms = 0;
                    s += 1;
                }
                if (s == 60)
                {
                    s = 0;
                    m += 1;
                }
                if (m == 60)
                {
                    m = 0;
                    h += 1;
                }
                labeltimer.Text = String.Format("{0}:{1}:{2}", h.ToString().ToString().PadLeft(2, '0'), m.ToString().ToString().PadLeft(2, '0'), s.ToString().ToString().PadLeft(2, '0'));
                marktimer.Text = String.Format("{0}:{1}:{2}:{3}", h.ToString().ToString().PadLeft(2, '0'), m.ToString().ToString().PadLeft(2, '0'), s.ToString().ToString().PadLeft(2, '0'), ms.ToString().ToString().PadLeft(2, '0'));

            }));
        }
    }
}
